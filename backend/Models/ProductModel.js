const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  price: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  userid: {
    type: String,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
});
const ProductModel = mongoose.model("product", ProductSchema);
module.exports = ProductModel;
