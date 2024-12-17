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
