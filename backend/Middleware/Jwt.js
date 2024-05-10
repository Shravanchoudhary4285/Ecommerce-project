require("dotenv").config();
const jwt = require("jsonwebtoken");

const VerifyToken = async (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header.split(" ")[1];
  if (!token) {
    res.send({
      message: "Token Not Found",
    });
  } else {
    jwt.verify(token, process.env.SECRETKEY, (err, data) => {
      if (err) {
        res.send({
          status: 401,
          message: "Token Expired Login Again",
        });
      } else {
        next();
      }
    });
  }
};

module.exports = VerifyToken;
