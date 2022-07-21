import "./footer.css";

import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="mystacks">
        <div className="my-stack useful-links">
          <h1>Useful Links</h1>
          <a>Special Promo</a>
          <a>Affiliete Links</a>
        </div>
        <div className="my-stack support">
          <h1>Support</h1>
          <a>FAQ's</a>
          <a>Support Center</a>
        </div>
        <div className="my-stack information">
          <h1>Information</h1>
          <a>About us</a>
          <a>Join us</a>
        </div>
      </div>
      <div className="social-media">
        <FaFacebook />
        <FaInstagram />
        <FaLinkedinIn />
        <FaTwitter />
      </div>
    </div>
  );
}
