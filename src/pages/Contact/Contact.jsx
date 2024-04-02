import "./Contact.css";

const Contact = ({ dark }) => {
  return (
    <div
      style={dark ? { background: "#fdd700" } : { background: "black" }}
      className="contact-container"
      id="contact"
    >
      <h1
        style={dark ? { color: "black" } : { color: "white" }}
        className="contact-main-title"
      >
        Contact{" "}
        <span style={dark ? { color: "white" } : { color: "#fdd700" }}>
          Me !
        </span>
      </h1>
      <div className="contact-form-container">
        <div className="contact-form-head">
          <input
            style={dark ? { border: "2px solid white" } : {}}
            className="contact-form-input"
            type="text"
            placeholder="First Name"
          />
          <input
            style={dark ? { border: "2px solid white" } : {}}
            className="contact-form-input"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="contact-form-head">
          <input
            style={dark ? { border: "2px solid white" } : {}}
            className="contact-form-input"
            type="text"
            placeholder="Phone Number"
          />
          <input
            style={dark ? { border: "2px solid white" } : {}}
            className="contact-form-input"
            type="text"
            placeholder="Email"
          />
        </div>
        <textarea
          style={dark ? { border: "2px solid white" } : {}}
          className="contact-form-textarea"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message !!!"
        ></textarea>
        <button
          style={dark ? { border: "2px solid white" } : {}}
          className="contact-form-button"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;
