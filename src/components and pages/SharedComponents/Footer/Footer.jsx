import "./Footer.css";
import logo from "../../../assets/logo.png";
import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-body rounded pt-3 px-2" >
      <div className=" mt-2 p-2 footer-grid-container">
        <div>
          <img className="site-logo rounded" src={logo} alt="" />
          <p className="mt-1 fw-bold">Animalto Toyasium</p>
        </div>
        <div>
          <p className="fs-3 fw-bold">Contact us</p>
          <p>
            <a href="mailto: sayedzulfikar2019@gmail.com">
              sayedzulfikar2019@gmail.com
            </a>{" "}
          </p>
        </div>
        <div>
          <p className="fs-3 fw-bold">Products</p>
          <ul className="p-0">
            <li>Lion toy</li>
            <li>Panda toy</li>
            <li>Elephant toy</li>
            <li>Horse toy</li>
            <li>Cow toy</li>
          </ul>
        </div>
        <div>
          <p className="fs-3 fw-bold">Social Link</p>
          <ul className="p-0">
            <li className="my-3"><FaFacebook/> <span>Facebook</span> </li>
            <li className="my-3"><FaTwitter/> <span>Twitter</span></li>
            <li  className="my-3"><FaInstagram/> <span>Instagram</span></li>
          </ul>
        </div>
      </div>
      <p className="p-1 text-center">
        © {new Date().getFullYear()} Animalto Toyasium . All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
