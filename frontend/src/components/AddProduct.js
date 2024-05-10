import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddProduct() {
  const Navigate = useNavigate();

  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");
  console.log(name, price, category, company);

  const userId = localStorage.getItem("userid");
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const params = {
      name: name,
      price: price,
      category: category,
      company: company,
      userid: userId,
    };
    const response = await axios.post(
      `http://localhost:3005/product/addproduct`,
      params
    );
    toast.info(response.data.message);
    if (response.data.message === "Product Item Added SuccessFully") {
      Navigate("/product");
    } else {
      window.location.reload();
    }
  };

  useEffect(() => {
    // for secure route
    const auth = localStorage.getItem("email");
    if (!auth) {
      Navigate("/login");
    }
  }, []);
  return (
    <>
      <Header></Header>
      <h1 style={{ textAlign: "center" }}>Add Product</h1>
      <Form onSubmit={HandleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            onChange={(e) => setname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product Price"
            onChange={(e) => setprice(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Product Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product category"
            onChange={(e) => setcategory(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCompany">
          <Form.Label>Product Company</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product company"
            onChange={(e) => setcompany(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
      <Footer></Footer>
    </>
  );
}

export default AddProduct;
