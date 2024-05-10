const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Register = async (req, res) => {
  const { name, email, password } = req.body;
  const existing_data = await UserModel.findOne({ email: email });
  try {
    if (!name || !email || !password) {
      res.send({
        message: "Require All Field",
      });
    } else if (existing_data) {
      res.send({
        message: "This User Already Axist",
      });
    } else {
      const Hashpassword = await bcrypt.hash(password, 10);
      const userdata = await UserModel.create({
        name: name,
        email: email,
        password: Hashpassword,
      });
      res.send({
        status: true,
        userdata: userdata,
        message: "Register Successfully",
      });
    }
  } catch (error) {
    res.send({
      message: "Something Went Wrong",
    });
  }
};
const LogIn = async (req, res) => {
  const { email, password } = req.body;
  const userdata = await UserModel.findOne({ email: email });
  try {
    if (!email || !password) {
      res.send({
        message: "Required All Field",
      });
    } else if (userdata) {
      const matchpassword = await bcrypt.compare(password, userdata.password);
      if (matchpassword) {
        const token = jwt.sign(
          { _id: userdata._id, email: UserModel.email },
          process.env.SECRETKEY,
          { expiresIn: "10d" }
        );
        res.send({
          status: true,
          userdata: userdata,
          message: "Login Successfully",
          token: token,
        });
      } else {
        res.send({
          message: "Password Does Not Match",
        });
      }
    } else {
      res.send({
        message: "Invalid User",
      });
    }
  } catch (error) {
    res.send({
      message: "Something Went Wrong In Login",
    });
  }
};

module.exports = { Register, LogIn };
