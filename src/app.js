const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("server listening on port 3000");
});

app.use("/test", (req, res) => {
  res.send("Server running for test");
});
app.use("/", (req, res) => {
  res.send("Server running for home");
});
app.use("/dummy", (req, res) => {
  res.send("Server running for dummy");
});
