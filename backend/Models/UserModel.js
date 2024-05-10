const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
});
const UserModel = mongoose.model("data", UserSchema);
module.exports = UserModel;
