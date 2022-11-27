const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/nodemy");

const AccountModel = mongoose.model("Account", {
  username: String,
  password: String,
});

module.exports = AccountModel