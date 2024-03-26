const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/PaytmApp");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 20,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 20,
  },
  lastName: {
    type: String,
    trim: true,
    maxLength: 20,
  },
}); 

const User = moongose.model("User", userSchema);

module.exports = {
    User;
};
