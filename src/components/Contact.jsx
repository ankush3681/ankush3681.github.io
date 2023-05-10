import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xjvdzbnz");

  return (
    <>
      <section className="nav-link contact" id="contact">
        <div className="nav-link-contact">
          <h2>
            Contact <span>Me!</span>
          </h2>
          <h4>
            Talent wins games, but teamwork and intelligence win championships.
          </h4>
          <p>
            Fill the form to connect if any query{" "}
            <i className="fas fa-smile"></i>
          </p>
          <div className="list">
            <li id="contact-phone">
              <a
                href="https://api.whatsapp.com/send?phone=+918878231626"
                target="_blank">
                +91-8878231626
              </a>
            </li>
            <li>
              <a
                href="mailto:ankushkumar83623@gmail.com"
                id="contact-email"
                target="_blank">
                ankushkumar83623@gmail.com{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ankush-kumar-227058171/"
                id="contact-linkedin">
                {" "}
                Linkedin : Ankush Kumar
              </a>
            </li>
          </div>
          <div className="contact-icons">
            <a
              id="contact-github"
              href="https://github.com/ankush3681"
              target="_blank">
              <i>
                <AiFillGithub />
              </i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+918878231626"
              target="_blank">
              <i>
                <AiOutlineWhatsApp />
              </i>
            </a>
            <a
              id="contact-linkedin"
              href="https://www.linkedin.com/in/ankush-kumar-227058171/"
              target="_blank">
              <i>
                <BsLinkedin />
              </i>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ color: "var(--main-color)" }}>
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="enter email address"
              border = "1px solid green"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              htmlFor="email"
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                color: "var(--main-color)",
              }}>
              Type your message here
            </label>
            <textarea id="message" name="message" placeholder="write here..." />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
            style={{
                padding:".5rem 2rem",
                color:"white",
                backgroundColor:"black"
            }}
              type="submit"
              disabled={state.submitting}
              color={"white"}
              backgroundColor={"green"}
              onClick={() =>
                alert("Message sended to Ankush.")
              }>
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;