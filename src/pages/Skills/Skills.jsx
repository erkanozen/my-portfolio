import "./Skills.css";

const Skills = ({ dark }) => {
  return (
    <div
      style={dark ? { background: "#fdd700" } : { background: "black" }}
      className="skills-container"
      id="skills"
    >
      <h1
        style={dark ? { color: "black" } : { color: "white" }}
        className="skills-main-title"
      >
        My{" "}
        <span style={dark ? { color: "white" } : { color: "#fdd700" }}>
          Skills
        </span>
      </h1>
      <div className="skills-wrapper">
        <div className="skills-image-container">
          <div className="skills-image-head">
            <img
              style={dark ? { background: "black" } : {}}
              className="skills-icon"
              src="/public/html.webp"
              alt=""
            />
            <span className="skills-icon-title">HTML</span>
          </div>
          <div className="skills-image-head">
            <img
              style={dark ? { background: "black" } : {}}
              className="skills-icon"
              src="/public/css.webp"
              alt=""
            />
            <span className="skills-icon-title">CSS</span>
          </div>
          <div className="skills-image-head">
            <img
              style={dark ? { background: "black" } : {}}
              className="skills-icon"
              src="/public/js.png"
              alt=""
            />
            <span className="skills-icon-title">Javascript</span>
          </div>
          <div className="skills-image-head">
            <img
              style={dark ? { background: "black" } : {}}
              className="skills-icon"
              src="/public/react.webp"
              alt=""
            />
            <span className="skills-icon-title">React</span>
          </div>
          <div className="skills-image-head">
            <img
              style={dark ? { background: "black" } : {}}
              className="skills-icon"
              src="/public/tailwind.png"
              alt=""
            />
            <span className="skills-icon-title">Tailwind-Css</span>
          </div>
          <div className="skills-image-head">
            <img
              style={dark ? { background: "black" } : {}}
              className="skills-icon"
              src="/public/bootstrap.webp"
              alt=""
            />
            <span className="skills-icon-title">Bootstrap</span>
          </div>
        </div>
        <div className="skills-info-container">
          <div
            style={
              dark
                ? { background: "black", color: "white" }
                : { background: "#fdd700", color: "black" }
            }
            className="skills-info-head"
          >
            <h2 className="skills-info-title">Frontend Developer</h2>
            <p className="skills-info">
              I'm a Front-end developer with experience in building responsive
              and optimized sites
            </p>
          </div>
          <div
            style={
              dark
                ? { background: "black", color: "white" }
                : { background: "#fdd700", color: "black" }
            }
            className="skills-info-head"
          >
            <h2 className="skills-info-title">UX Designer</h2>
            <p className="skills-info">
              I have designed multiple landing pages and have created design
              systems as well
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
