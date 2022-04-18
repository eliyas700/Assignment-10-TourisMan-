import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import logo from "../../../Images/logo.png";
import CustomLink from "../../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <Navbar sticky="top" className="navBar" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <CustomLink to="/">
              <img height={40} src={logo} alt="" />
            </CustomLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "170px" }}
              navbarScroll
            >
              <Nav.Link className="fs-5">
                <CustomLink to="/home">Home</CustomLink>
              </Nav.Link>
              <Nav.Link
                style={{ color: "#dff9fb" }}
                className="fs-5 "
                href="home#services"
              >
                Services
              </Nav.Link>
              <Nav.Link className="fs-5">
                <CustomLink to="/blog">Blog</CustomLink>
              </Nav.Link>
              <Nav.Link>
                <CustomLink className="fs-5" to="/about">
                  {" "}
                  About
                </CustomLink>
              </Nav.Link>

              {user ? (
                <button
                  style={{ border: "none", background: "transparent" }}
                  onClick={() => {
                    signOut(auth);
                  }}
                  className="fs-5 text-white-50"
                >
                  <span>
                    <small className="fs-6 text-white">
                      <img
                        title={user?.email}
                        height={28}
                        className="rounded-circle"
                        src={user?.photoURL}
                        alt={user?.displayName}
                        srcset=""
                      />
                    </small>
                  </span>
                  Sign Out
                </button>
              ) : (
                <Nav.Link className="fs-5">
                  <CustomLink to="/login"> Log In</CustomLink>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
