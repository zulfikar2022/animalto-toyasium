/* eslint-disable no-unused-vars */
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import "./NavBar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../../MyContext/AuthProvider";

const NavBar = () => {
  const { user, setUser, logOut } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut().then((res) => {
      navigate("/");
      setUser(null);
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
          <Link>
            <Navbar.Brand
              className="fw-bold"
              style={{ color: "black", marginLeft: "10px" }}
            >
              Animalto toyasium
            </Navbar.Brand>
          </Link>
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
              to="/allToys"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              All Toys
            </NavLink>
            {user ? (
              <NavLink
                to="/myToys"
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
                to="/addToy"
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
              to="/blogs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Blogs
            </NavLink>
          </Nav>
          {/* d-flex align-items-center */}
          <div className="user-image-and-button">
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
