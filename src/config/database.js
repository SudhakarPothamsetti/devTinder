const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sudhakar:Sudhakar123@namastenode.nifo0.mongodb.net/devTinder?retryWrites=true&w=majority"
  );
  console.log("DB connected");
};

module.exports = connectDB;
