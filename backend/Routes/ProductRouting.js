const express = require("express");
const router = express.Router();
const {
  AddProduct,
  GetProduct,
  Update,
  Delete,
  SingleData,
} = require("../Controllers/Product");
const verifytoken=require("../Middleware/Jwt")

router.post("/addproduct", AddProduct);
router.get("/getproduct",verifytoken, GetProduct);
router.delete("/delete/:id", Delete);
router.put("/update/:id", Update);
router.get("/:id", SingleData);

module.exports = router;
