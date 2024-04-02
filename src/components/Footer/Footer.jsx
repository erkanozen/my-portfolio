import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = ({dark}) => {
  return <div className="footer-container">
  <a
    style={dark ? {background: "black" , color: "white"} : {background: "white" , color: "black"}}
    className="home-contact-container-a"
    target="blank"
    href="https://twitter.com/i/flow/login?redirect_after_login=%2FErknOzen07"
  >
    <FaTwitter className="home-contanct-icon" />
  </a>
  <a
   style={dark ? {background: "black" , color: "white"} : {background: "white" , color: "black"}}
    className="home-contact-container-a"
    target="blank"
    href="https://www.linkedin.com/in/erkan-%C3%B6zen-75910b301/"
  >
    <FaLinkedin className="home-contanct-icon" />
  </a>
  <a
   style={dark ? {background: "black" , color: "white"} : {background: "white" , color: "black"}}
    className="home-contact-container-a"
    target="blank"
    href="https://www.instagram.com/erkanozen07/?utm_source=qr&igsh=djRnc28yeGZhOWxw"
  >
    <FaInstagram className="home-contanct-icon" />
  </a>
  <a
   style={dark ? {background: "black" , color: "white"} : {background: "white" , color: "black"}}
    className="home-contact-container-a"
    target="blank"
    href="https://github.com/erkanozen"
  >
    <FaGithub className="home-contanct-icon" />
  </a>
</div>;
};

export default Footer;
