/* eslint-disable no-unused-vars */
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../../MyContext/AuthProvider";

const NavBar = () => {
  const { user, setUser, logOut } = useContext(authContext);
  const handleLogOut = () => {
    console.log("clicked log out");
    logOut().then((res) => {
      console.log(res);
      // setUser(null);
    });
  };
  return (
    <Navbar
      style={{ backgroundColor: "#a7daef6b" }}
      className="rounded"
      expand="lg"
    >
      <Container className="align-items-center">
        <div className="d-flex align-items-center">
          <img src={logo} className="site-logo rounded" />
          <Navbar.Brand
            href="#home"
            className="fw-bold"
            style={{ color: "black", marginLeft: "10px" }}
          >
            Animalto toyasium
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className=" nav-links me-auto align-items-center">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/messages"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              All Toys
            </NavLink>
            {user ? (
              <NavLink
                to="/message"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                My Toys
              </NavLink>
            ) : (
              ""
            )}
            {user ? (
              <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Add A Toy
              </NavLink>
            ) : (
              ""
            )}
            <NavLink
              to="/messages"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Blogs
            </NavLink>
          </Nav>
          <div className="d-flex align-items-center">
            {user ? (
              <img
                className="user-photo"
                title={user?.displayName}
                src={user?.photoURL}
              ></img>
            ) : (
              ""
            )}
            {!user ? (
              <Link to="/login">
                {" "}
                <Button className="w-100 loginButton">Login</Button>
              </Link>
            ) : (
              <Link onClick={handleLogOut}>
                {" "}
                <Button className="w-100 loginButton">Logout</Button>
              </Link>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
