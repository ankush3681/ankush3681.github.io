import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <section className="nav-link contact" id="contact">
        <div className="nav-link-contact">
          <h2>
            Contact <span>Me!</span>
          </h2>
          <h4>
          Coming together is a beginning. Keeping together is progress. Working together is success.
          </h4>
          <p>
            Fill the form to connect if any query <i className="fas fa-smile"></i>
          </p>
          <div className="list">
            <li id="contact-phone">
              <a
                href="https://api.whatsapp.com/send?phone=+918878231626"
                target="_blank"
              >
                +91-8878231626
              </a>
            </li>
            <li>
              <a
                href="mailto:ankushkumar83623@gmail.com"
                id="contact-email"
                target="_blank"
              >
                ankushkumar83623@gmail.com{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ankush-kumar-227058171/"
                id="contact-linkedin"
              >
                {" "}
                Linkedin : Ankush Kumar
              </a>
            </li>
          </div>
          <div className="contact-icons">
            <a
              id="contact-github"
              href="https://github.com/ankush3681"
              target="_blank"
            >
              <i>
                <AiFillGithub />
              </i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+918878231626"
              target="_blank"
            >
              <i>
                <AiOutlineWhatsApp />
              </i>
            </a>
            <a
              id="contact-linkedin"
              href="https://www.linkedin.com/in/ankush-kumar-227058171/"
              target="_blank"
            >
              <i>
                <BsLinkedin />
              </i>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <input type="name" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email Address" required />
            <input type="" placeholder="Your Mobile Number" required />
            <textarea
              name=""
              id=""
              cols="35"
              rows="10"
              placeholder="How Can I Help You"
              required
            ></textarea>
            <input type="submit" value="Send Message" className="submit" required />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
