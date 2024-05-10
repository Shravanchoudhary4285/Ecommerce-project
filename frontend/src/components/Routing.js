import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./Index";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import AddProduct from "./AddProduct";
import Product from "./Product";
import UpdateProduct from "./UpdateProduct";
import Profile from "./Profile";
function Routing() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Index />}></Route> */}
        <Route path="/" element={<Profile />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/addproduct" element={<AddProduct />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/updateproduct/:id" element={<UpdateProduct />}></Route>

      </Routes>
    </>
  );
}

export default Routing;
