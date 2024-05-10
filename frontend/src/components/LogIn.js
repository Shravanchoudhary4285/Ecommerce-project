import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { toast } from "react-toastify";

function LogIn() {
  const Navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const params = { email: email, password: password };
    const response = await axios.post(`http://localhost:3005/login`, params);

    toast.info(response.data.message);

    if (response.data.status === true) {
      localStorage.setItem("userid", response.data.userdata._id);
      localStorage.setItem("name", response.data.userdata.name);
      localStorage.setItem("email", email);
      localStorage.setItem("token",response.data.token)
      Navigate("/");
    } else {
      toast.info(response.data.message);
      window.location.reload();
    }
  };

  // for Private Component
  useEffect(() => {
    const auth = localStorage.getItem("email");
    if (auth) {
      Navigate("/");
    }
  }, []);
  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center", marginTop: 10 }}>Login</h1>
      <Form onSubmit={HandleSubmit}>
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
          LogIn
        </Button>
      </Form>
    </div>
  );
}

export default LogIn;
