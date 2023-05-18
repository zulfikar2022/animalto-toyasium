import "./Footer.css";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-body rounded">
      <div className=" mt-2 p-2 footer-grid-container">
        <div>
          <img className="site-logo rounded" src={logo} alt="" />
          <p className="mt-1 fw-bold">Animalto Toyasium</p>
          <p>
            Contact us :{" "}
            <a href="mailto: sayedzulfikar2019@gmail.com">
              sayedzulfikar2019@gmail.com
            </a>{" "}
          </p>
        </div>
        <div>
          <p>Contact us</p>
        </div>
        <div>
          <p>Product</p>
        </div>
        <div>
          <p>Support</p>
        </div>
      </div>
      <p className="p-1 text-center">
        © {new Date().getFullYear()} Animalto Toyasium . All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
