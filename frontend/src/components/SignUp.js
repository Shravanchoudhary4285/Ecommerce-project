import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { toast } from "react-toastify";

function SignUp() {
  const Navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const params = {
      name: name,
      email: email,
      password: password,
    };
    const response = await axios.post(`http://localhost:3005/register`, params);
    toast.info(response.data.message);
    if (response.data.status === true) {
      Navigate("/login");
    } else {
      toast.info(response.data.message);
      window.location.reload();
    }
  };
  // For Private Component
  useEffect(() => {
    const auth = localStorage.getItem("email");
    if (auth) {
      Navigate("/");
    }
  }, []);
  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center", marginTop: 10 }}>SignUp</h1>
      <Form onSubmit={HandleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => setname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setemail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          SignUp
        </Button>
      </Form>
    </>
  );
}

export default SignUp;
