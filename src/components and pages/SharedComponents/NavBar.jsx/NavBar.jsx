import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
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
            <NavLink
              to="/message"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              My Toys
            </NavLink>
            <NavLink
              to="/messages"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Add A Toy
            </NavLink>
            <NavLink
              to="/messages"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Blogs
            </NavLink>
          </Nav>
          <div>
           <Link to='/login'> <Button className="w-100 loginButton" >Login</Button></Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
