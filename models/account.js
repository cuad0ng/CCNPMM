const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://cuadong01012001:$o_Nic332177@vms-ccnpmm.y1udpu1.mongodb.net/?retryWrites=true&w=majority");

const AccountModel = mongoose.model("Account", {
  username: String,
  password: String,
});

module.exports = AccountModel