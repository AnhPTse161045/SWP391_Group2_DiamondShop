import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";

import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
} from "mdb-react-ui-kit";
import Cart from "./components/Cart";
function App() {
  return (
    <Router>
      <div className="App">
      
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            {/* Navbar Toggle Button positioned to the left */}
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="custom-navbar-toggle"
            />

            {/* Centered Brand Name */}
            <Navbar.Brand className="mx-auto" as={Link} to="/">
              Eleanor Luxury
            </Navbar.Brand>

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/login">
                    Log in
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>

            {/* Additional items aligned to the right (if needed) */}
            <MDBNavbarNav className="me-auto">
              {" "}
              {/* Left container */}
              <MDBNavbarItem className="me-3 me-lg-0">
                <MDBNavbarLink href="#">
                  <MDBIcon fas icon="phone" /> (123) 456-7890
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            {/*  */}
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/login">
                <Button variant="outline-primary">Login</Button>
              </Nav.Link>
              <Nav.Link href="/cart">
                <MDBIcon fas icon="shopping-cart" />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
       
      </div>
      <div>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
