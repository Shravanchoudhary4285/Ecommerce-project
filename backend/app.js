const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
require("./Models/Connection");
const Routing = require("./Routes/Routing");
const Product = require("./Routes/ProductRouting");
const port = process.env.PORT || 3005;
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use("/", Routing);
app.use("/product", Product);

app.listen(port, () => {
  console.log(`Server is Runnning On http://localhost:${port}`);
});
