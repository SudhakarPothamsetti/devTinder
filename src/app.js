const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("user saved");
  } catch (err) {
    console.error("user signup unsuccessful :" + err.message);
  }
});

//Feed api - GET all users

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({}); // returns all users {emailId:'email'} finds array of users with that email
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.delete("/user-delete", async (req, res) => {
  const { userId } = req.body;
  console.log("user delete");

  try {
    const user = await User.findByIdAndDelete(userId, {
      returnDocument: "before",
    }); // We can also pass { __id : userId } or we can use the following approach

    // const userDelete = await User.findOneAndDelete(
    //   { _id: userId },
    //   { returnDocument: "before" }
    // );
    console.log(user);
    res.send("User deleted");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.patch("/user-update", async (req, res) => {
  // whatever the fields we got from request body are updated if we got any new fields other than schema they are ignored
  const user = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(user.userId, user, {
      returnDocument: "after",
    });
    console.log(updatedUser);
    res.send("user updated successfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("server listening on port 3000");
    });
  })
  .catch((err) => {
    console.error("error in db connection");
  });

app.use("/", (err, req, res, next) => {
  if (err) res.status(500).send("something went wrong");
});
