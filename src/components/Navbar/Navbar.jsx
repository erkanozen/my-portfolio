import "./Navbar.css";
import { IoMoon } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = ({ HandleMode, dark }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const HandleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);
  return (
    <div id="navbar" className="nav-container">
      <div className="nav-title-container">
        <h1 className="nav-title">E.Ö</h1>
      </div>
      <div className="nav-list-container">
        <ul
          className={`nav-list-wrapper ${menuOpen ? "nav-list-open-menu" : ""}`}
        >
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              className="nav-title-home"
              smooth
              to="/#home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              smooth
              to="/#about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              smooth
              to="/#skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              smooth
              to="/#education"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              smooth
              to="/#contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav-icon-container">
          <IoMoon className="nav-dark-mode" />
          <IoIosSunny className="nav-light-mode" />
          <span
            onClick={HandleMode}
            className={`${dark ? "nav-icon-ligth" : "nav-icon-select"} `}
          ></span>
        </div>
        <BiMenuAltRight onClick={HandleMenu} className="nav-menu" />
      </div>
    </div>
  );
};

export default Navbar;
