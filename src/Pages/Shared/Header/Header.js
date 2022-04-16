import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <>
      <Navbar sticky="top" className="navBar" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <Link to="/">
              <img height={40} src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "170px" }}
              navbarScroll
            >
              <Nav.Link className="fs-5" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="fs-5" href="#action2">
                Tours
              </Nav.Link>
              <Nav.Link className="fs-5" href="#action2">
                Blog
              </Nav.Link>
              <Nav.Link className="fs-5" href="#action2">
                About
              </Nav.Link>
              <Nav.Link className="fs-5" href="#action2">
                Log In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
