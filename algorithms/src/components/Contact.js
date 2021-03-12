import React from "react";
import "../style/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-text">
        <h1>Contact Us</h1>
        <p>
          Do you have any inquiries or questions?
          <br /> Please fill out the form to contact us. Thank you!!
        </p>
      </div>
      <div className="input_form">
        <form id="inputText_form">
            <div> <input
            type="text"
            className="input_text"
            placeholder="Your Email"
            required
          />
</div>
         
          <label>Message:</label>
          <textarea rows="3" cols="63" id="bodyArea" required></textarea>

          <button type="submit" id="postmessage">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
