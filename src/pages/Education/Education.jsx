import "./Education.css";
import { MdOutlineNoteAlt } from "react-icons/md";

const Education = ({ dark }) => {
  return (
    <div
      style={
        dark
          ? { background: "#fdd700", color: "white" }
          : { background: "black", color: "white" }
      }
      className="education-container"
      id="education"
    >
      <h1
        style={dark ? { color: "black" } : { color: "white" }}
        className="education-main-title"
      >
        My
        <span style={dark ? { color: "white" } : { color: "#fdd700" }}>
          Education
        </span>
      </h1>
      <div
        style={
          dark
            ? { border: "2px solid white", background: "black" }
            : { border: "1px solid #fdd700", background: "black" }
        }
        className="education-info-container"
      >
        <div className="education-date-container">
          <MdOutlineNoteAlt
            style={dark ? { color: "#fdd700" } : { color: "fdd700" }}
            className="education-date-icon"
          />
          <span className="education-date">2014 - 2018</span>
        </div>
        <h2 className="education-school">Karatay Anadolu Lisesi</h2>
        <p className="education-info">ANTALYA</p>
        <p
          style={dark ? { color: "#fdd700" } : { color: "#fdd700" }}
          className="education-avarage"
        >
          Ortalama : 78.5 / 100
        </p>
      </div>
      <div
        style={
          dark
            ? { border: "2px solid white", background: "black" }
            : { border: "1px solid #fdd700", background: "black" }
        }
        className="education-info-container"
      >
        <div className="education-date-container">
          <MdOutlineNoteAlt
            style={dark ? { color: "#fdd700" } : { color: "fdd700" }}
            className="education-date-icon"
          />
          <span className="education-date">2018 - 2020</span>
        </div>
        <h2 className="education-school">Akdeniz Üniversitesi</h2>
        <p className="education-info">Biyomedikal Cihaz Teknolojisi</p>
        <p
          style={dark ? { color: "#fdd700" } : { color: "#fdd700" }}
          className="education-avarage"
        >
          GNO : 3.10 / 4
        </p>
      </div>
      <div
        style={
          dark
            ? { border: "2px solid white", background: "black" }
            : { border: "1px solid #fdd700", background: "black" }
        }
        className="education-info-container"
      >
        <div className="education-date-container">
          <MdOutlineNoteAlt
            style={dark ? { color: "#fdd700" } : { color: "fdd700" }}
            className="education-date-icon"
          />
          <span className="education-date">2023 - 2024 / 4 Ay </span>
        </div>
        <h2 className="education-school">ODTÜ İngilizce Sertifika Programı</h2>
        <p className="education-info">Ankara / ODTÜ</p>
        <p
          style={dark ? { color: "#fdd700" } : { color: "#fdd700" }}
          className="education-avarage"
        >
          Ortalama : 63.5 / 100
        </p>
      </div>
      <div
        style={
          dark
            ? { border: "2px solid white", background: "black" }
            : { border: "1px solid #fdd700", background: "black" }
        }
        className="education-info-container"
      >
        <div className="education-date-container">
          <MdOutlineNoteAlt
            style={dark ? { color: "#fdd700" } : { color: "fdd700" }}
            className="education-date-icon"
          />
          <span className="education-date">
            20.09.2023 / Halen Devam Ediyor
          </span>
        </div>
        <h2 className="education-school">
          HTML - CSS - BootStrap - Tailwind-CSS - Javascript - React
        </h2>
        <p className="education-info">Udemy / Youtube</p>
        <p
          style={dark ? { color: "#fdd700" } : { color: "#fdd700" }}
          className="education-avarage"
        >
          Junior Front-end Developer
        </p>
      </div>
    </div>
  );
};

export default Education;
