const express = require("express");
const router = express.Router();
const { Register, LogIn } = require("../Controllers/User");

router.get("/", (req, res) => {
  res.send({
    message: "API Calling",
  });
});

router.post("/register", Register);
router.post("/login", LogIn);

module.exports = router;
