import "./Home.css";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import { CiCircleChevUp } from "react-icons/ci";

const Home = ({ dark }) => {
  return (
    <div
      style={
        dark
          ? { background: "#ffd700", color: "black" }
          : { background: "black", color: "white" }
      }
      id="home"
      className="home-container"
    >
      <div className="home-info-container">
        <div className="home-info-wrapper">
          <h2 className="home-info-title">Hi , I'm Erkan ÖZEN</h2>
          <p
            style={dark ? { color: "black" } : { color: "#ffd700" }}
            className="home-info-job"
          >
            Frontend Developer
          </p>
          <div className="home-info-head">
            <p className="home-info">
              I'm a frontend Developer with 6 month of experience using React .
              Reach me if you'd like to learn more !
            </p>
            <Link
              style={
                dark
                  ? { color: "#fdd700", background: "black" }
                  : { color: "black", background: "#fdd700" }
              }
              smooth
              to="/#contact"
              className="home-contact-button"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="home-contact-container">
          <a
            style={
              dark
                ? { background: "black", color: "white" }
                : { background: "white", color: "black" }
            }
            className="home-contact-container-a"
            target="blank"
            href="https://twitter.com/i/flow/login?redirect_after_login=%2FErknOzen07"
          >
            <FaTwitter className="home-contanct-icon" />
          </a>
          <a
            style={
              dark
                ? { background: "black", color: "white" }
                : { background: "white", color: "black" }
            }
            className="home-contact-container-a"
            target="blank"
            href="https://www.linkedin.com/in/erkan-%C3%B6zen-75910b301/"
          >
            <FaLinkedin className="home-contanct-icon" />
          </a>
          <a
            style={
              dark
                ? { background: "black", color: "white" }
                : { background: "white", color: "black" }
            }
            className="home-contact-container-a"
            target="blank"
            href="https://www.instagram.com/erkanozen07/?utm_source=qr&igsh=djRnc28yeGZhOWxw"
          >
            <FaInstagram className="home-contanct-icon" />
          </a>
          <a
            style={
              dark
                ? { background: "black", color: "white" }
                : { background: "white", color: "black" }
            }
            className="home-contact-container-a"
            target="blank"
            href="https://github.com/erkanozen"
          >
            <FaGithub className="home-contanct-icon" />
          </a>
        </div>
      </div>
      <div className="home-image-container">
        <img className="home-image" src="/public/profile-avatar.webp" alt="" />
      </div>
      <Link  smooth
              to="/#navbar">
        <CiCircleChevUp className="up-icon" />
      </Link>
    </div>
  );
};

export default Home;
