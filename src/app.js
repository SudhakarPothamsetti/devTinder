const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");
const app = express();

app.listen(3000, () => {
  console.log("server listening on port 3000");
});

app.use("/admin", adminAuth, (req, res) => {
  res.send("Server running for admin");
});
app.use("/user", userAuth, (req, res) => {
  res.send("Server running for user");
});

app.use("/dummy", (req, res) => {
  res.send("Server running for dummy");
});

app.get("/test", (req, res, next) => {
  // undefined.abc;
  throw new Error();
});

app.use("/", (err, req, res, next) => {
  if (err) res.status(500).send("something went wrong");
});
