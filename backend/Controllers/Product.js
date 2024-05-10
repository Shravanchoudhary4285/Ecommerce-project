const ProductModel = require("../Models/ProductModel");
const jwt = require("jsonwebtoken");
const SECRETKEY = "shravanchoudhary";
const AddProduct = async (req, res) => {
  const { name, price, category, userid, company } = req.body;

  try {
    if (!name || !price || !category || !company) {
      res.send({
        message: "Required All The Field",
      });
    } else {
      await ProductModel.create({
        name: name,
        price: price,
        category: category,
        userid: userid,
        company: company,
      });
      res.send({
        message: "Product Item Added SuccessFully",
      });
    }
  } catch {
    res.send({
      message: "Something Went Wrong In Add Category",
    });
  }
};

const GetProduct = async (req, res) => {
  try {
    const getdata = await ProductModel.find();
    if (getdata.length > 0) {
      res.send({
        getdata: getdata,
      });
    } else {
      res.send({
        message: "No Result Found",
      });
    }
  } catch {
    res.send({
      message: "Something Went Wrong In Getdata",
    });
  }
};

const Delete = async (req, res) => {
  try {
    const deletedata = await ProductModel.findByIdAndDelete(req.params.id);
    res.send({
      deletedata: deletedata,
      message: "Data Successfully Deleted",
    });
  } catch {
    res.send({
      message: "Something Went Wrong In Delete Data",
    });
  }
};
const Update = async (req, res) => {
  const { name, price, category, company } = req.body;
  try {
    const updatedata = await ProductModel.findByIdAndUpdate(req.params.id, {
      name: name,
      price: price,
      category: category,
      company: company,
    });
    res.send({
      message: "Data Update Successfully",
      updatedata: updatedata,
    });
  } catch {
    res.send({
      message: "Something Went Wrong In Update Data",
    });
  }
};

const SingleData = async (req, res) => {
  try {
    const singledata = await ProductModel.findOne({ _id: req.params.id });
    if (singledata) {
      res.send({
        singledata,
      });
    } else {
      res.send({
        message: "No Record Found",
      });
    }
  } catch {
    res.send({
      message: "Something Went Wrong In single Data",
    });
  }
};



module.exports = { AddProduct, GetProduct, Delete, Update, SingleData};
