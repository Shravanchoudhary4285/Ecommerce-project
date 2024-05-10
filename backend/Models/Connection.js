const mongoose = require("mongoose");
const Connection = mongoose
  .connect(
    `mongodb+srv://shravan:12345@cluster0.q49pelo.mongodb.net/ecommerce-project`
  )
  .then(() => {
    console.log("MONGODB Connected");
  })
  .catch(() => {
    console.log("MONGODB DisConnected");
  });

// mongodb://127.0.0.1:27017/ecommerce_project

module.exports = Connection;
