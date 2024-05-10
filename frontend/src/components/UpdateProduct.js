import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function UpdateProduct() {
  const param = useParams();
  const Navigate = useNavigate();

  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");

  console.log(name, price, category, company);

  const GetSingleData = async () => {
    const response = await axios.get(
      `http://localhost:3005/product/${param.id}`
    );
    if (param.id === ":id") {
      setname("");
      setprice("");
      setcategory("");
      setcompany("");
    } else {
      setname(response.data.singledata.name);
      setprice(response.data.singledata.price);
      setcategory(response.data.singledata.category);
      setcompany(response.data.singledata.company);
    }
  };

  useEffect(() => {
    GetSingleData();
  },[]);

  const HandleUpdate = async (e) => {
    e.preventDefault();
    const params = {
      name: name,
      price: price,
      category: category,
      company: company,
    };
    const response = await axios.put(
      `http://localhost:3005/product/update/${param.id}`,
      params
    );
    alert(response.data.message);
    Navigate("/product");
  };
  return (
    <>
      <Header></Header>
      <h1 style={{ textAlign: "center" }}>Update Product</h1>
      <Form onSubmit={HandleUpdate}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            onChange={(e) => setname(e.target.value)}
            value={name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product Price"
            onChange={(e) => setprice(e.target.value)}
            value={price}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Product Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product category"
            onChange={(e) => setcategory(e.target.value)}
            value={category}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCompany">
          <Form.Label>Product Company</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product company"
            onChange={(e) => setcompany(e.target.value)}
            value={company}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Product
        </Button>
      </Form>
      <Footer></Footer>
    </>
  );
}

export default UpdateProduct;
