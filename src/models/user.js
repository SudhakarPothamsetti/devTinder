const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const User = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  emailId: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("User", User);
