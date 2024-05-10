import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Header() {
  const Navigate = useNavigate();
  const auth = localStorage.getItem("email");
  const Name = localStorage.getItem("name");
  const userId = localStorage.getItem("userid");

  const LogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    Navigate("/signup");
  };
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">E-COMMERCE</Navbar.Brand>
          {auth ? (
            <Nav className="me-auto">
              <Nav.Link href="/">Profile</Nav.Link>
              <Nav.Link href="/product">Product</Nav.Link>
              <Nav.Link href="/addproduct">Add PProduct</Nav.Link>
              <Nav.Link href="/" onClick={LogOut}>
                Logout ({Name})
              </Nav.Link>
            </Nav>
          ) : (
            <Nav
              className="me-auto"
              style={{ position: "absolute", right: 20 }}
            >
              <Nav.Link href="/signup">SignUp</Nav.Link>
              <Nav.Link href="/login">LogIn</Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
