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

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, //reference to user modal
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const Account = mongoose.model("Account", accountSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
  User,
  Account,
};
