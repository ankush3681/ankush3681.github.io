import React, { useRef, useState } from "react";
import { sendEmail } from "../Email/Email";

const Contact = ({ darkMode }) => {
  const formRef = useRef();
  const [success, setSuccess] = useState(null);

  const textDark = darkMode ? "text-white" : "text-dark";
  const bgDark = darkMode ? "bg-dark" : "bg-white";
  const bgDarkSecondary = darkMode ? "bg-dark-2" : "bg-white";
  const textBodyColor = darkMode ? "text-dark-6" : "text-body-color";

  const sendEmailHandler = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = {
      user_name: form.user_name.value,
      user_email: form.user_email.value,
      user_phone: form.user_phone.value,
      message: form.message.value,
    };

    try {
      await sendEmail(formData);
      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error(error);
      setSuccess(false);
    }
  };

  return (
    <>
      <div className="py-1" id="contact">
        <h2
          className={`text-center text-black text-4xl md:text-4xl lg:text-6xl lg:my-10 w-full ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Contact
        </h2>
      </div>

      <section className={`relative  overflow-hidden ${bgDark} py-20`}>
        <div className="container">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <h2
                  className={`mb-6 text-[32px] font-bold uppercase ${textDark} sm:text-[40px] lg:text-[36px] xl:text-[40px]`}
                >
                  GET IN TOUCH WITH ME
                </h2>
                <p
                  className={`mb-9 text-base leading-relaxed ${textBodyColor}`}
                >
                  Got a project, idea, or opportunity you’d like to discuss? I’m
                  open to new challenges and love connecting with people in the
                  tech community. Drop me a message, and let’s explore how we
                  can work together!
                </p>

                {/* Address Details */}
                <ContactInfo
                  icon={<LocationIcon />}
                  label="My Location"
                  value="Champa, Chhattisgarh, India"
                  textColor={textBodyColor}
                  textDark={textDark}
                />

                <ContactInfo
                  icon={<PhoneIcon />}
                  label="Phone Number"
                  value="+91-8878231626"
                  textColor={textBodyColor}
                  textDark={textDark}
                />

                <ContactInfo
                  icon={<EmailIcon />}
                  label="Email Address"
                  value="ankushkumar83623@gmail.com"
                  textColor={textBodyColor}
                  textDark={textDark}
                />
              </div>
            </div>

            {/* Form Container */}
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 me-8 relative">
              <div
                className={`relative overflow-hidden rounded-lg ${bgDarkSecondary} p-8 shadow-2xl sm:p-12`}
              >
                {/* Decorative SVGs */}
                <div className="absolute -top-10 -left-10 opacity-10 z-0">
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="100" cy="100" r="100" fill="#3056D3" />
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 opacity-10 z-0">
                  <svg
                    width="180"
                    height="180"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="200"
                      height="200"
                      rx="50"
                      fill="#13C296"
                    />
                  </svg>
                </div>

                {/* Form starts here */}
                <form
                  ref={formRef}
                  className="relative z-10"
                  onSubmit={sendEmailHandler}
                >
                  <ContactInputBox
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                  />
                  <ContactInputBox
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                  />
                  <ContactInputBox
                    type="text"
                    name="user_phone"
                    placeholder="Your Phone"
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Your Message"
                    name="message"
                    defaultValue=""
                  />

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full rounded border border-primary bg-gradient-to-r from-[#3056D3] to-[#13C296] p-3 text-white text-lg font-semibold transition duration-300 ease-in-out hover:scale-105 shadow-lg"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                {/* Show success/failure message */}
                {success !== null && (
                  <div
                    className={`mt-4 ${
                      success ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {success
                      ? "Message sent successfully!"
                      : "Something went wrong. Please try again."}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

// ContactInfo Component
const ContactInfo = ({ icon, label, value, textColor, textDark }) => (
  <div className="mb-8 flex w-full max-w-[370px]">
    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
      {icon}
    </div>
    <div className="w-full">
      <h4 className={`mb-1 text-xl font-bold ${textDark}`}>{label}</h4>
      <p className={`text-base ${textColor}`}>{value}</p>
    </div>
  </div>
);

// Input and TextArea Components
const ContactInputBox = ({ type, name, placeholder }) => (
  <div className="mb-6">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full rounded border bg-transparent p-4 text-white shadow-sm"
    />
  </div>
);

const ContactTextArea = ({
  row,
  placeholder,
  name,
  defaultValue,
  darkMode,
}) => (
  <div className="mb-6">
    <textarea
      name={name}
      rows={row}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className={`w-full rounded border bg-transparent p-4 shadow-sm ${
        darkMode ? "text-white" : "text-black bg-white"
      }`}
    />
  </div>
);

// Icons for contact information
const LocationIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.6 13.3502C30.3 12.8502 29.6 12.7002 29.1 13.0002L16.5 5.6002C15.9 5.2002 15.1 5.2002 14.5 5.6002L1.89998 13.0002C1.39998 13.3002 1.59998 13.9002 2.09998 13.7002L17.7 5.5002C16.65 4.8502 15.3 4.8502 14.3 5.5002L30.6 13.7002C31.1 13.8002 31 14 30.6 13.8502L17.7 5.5502L2.5 15.6002"
      fill="#30E4C7"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30.5865 23.9298C29.9245 24.5918 28.8895 24.4728 27.9895 23.7558L21.4425 17.7088C20.7425 16.9488 19.2575 16.9488 18.5575 17.7088C15.5575 19.7088 12.5575 20.7088 9.5575 20.7088C8.4975 20.7088 7.4375 19.9288 7.4375 19.0088C7.4375 18.3088 8.4375 18.3088 8.9375 18.7588C9.8375 19.3488 10.8375 19.6488 11.6975 19.6488C12.5575 19.6488 13.5575 19.3488 14.0175 18.7588C14.5775 18.3288 15.3375 17.6388 16.1675 16.9388C17.4475 15.6588 18.3375 14.6588 18.8375 13.2088C19.0275 12.8388 19.0275 12.4788 19.2575 12.0188C19.4775 11.5288 19.9775 11.2388 20.2975 11.2388C20.5775 11.2388 20.8475 11.5288 21.0575 12.0188C21.2975 12.4788 21.3175 12.8388 21.5075 13.2088C22.0075 14.6588 22.8975 15.6588 24.1775 16.9388C25.0175 17.6388 25.7775 18.3288 26.3375 18.7588C26.7975 19.3488 27.7975 19.6488 28.6575 19.6488C29.5175 19.6488 30.5175 19.3488 30.9775 18.7588C31.4375 18.3088 31.4375 17.3388 30.5865 16.9688C30.3375 16.7088 30.0875 16.6488 29.8375 16.6988C29.4575 16.8188 29.0875 16.9988 28.7475 17.2388L22.5775 19.4788C22.1075 19.8088 21.6375 20.1488 21.2175 20.4788L16.7575 20.7888L14.5375 21.5388L14.3075 22.7888L19.5175 20.1488L21.4675 17.9388C22.3475 18.0788 23.1875 18.1088 24.0275 18.0788C24.5975 18.0788 25.1175 18.2588 25.5975 18.5588C26.2575 18.9688 26.5175 19.3388 26.5775 19.7188C26.6375 20.0988 26.5975 20.5188 26.2975 20.9688C26.0775 21.3988 25.4575 21.6288 24.8975 21.6388L24.5175 21.6288L23.3775 21.3988C23.0775 21.2888 23.0375 21.0488 23.0975 20.7588L23.2575 20.4388C23.4575 20.0888 23.8575 19.7188 24.5175 19.7188L25.7175 19.3588L26.0575 18.7588"
      fill="#3056D3"
    />
  </svg>
);

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="none"
    width="32"
    height="32"
  >
    <path
      d="M28 4H4C2.89 4 2 4.89 2 6V26C2 27.1 2.89 28 4 28H28C29.1 28 30 27.1 30 26V6C30 4.89 29.1 4 28 4ZM28 6L16 14L4 6V6H28V6Z"
      fill="#3A88CB"
    />
  </svg>
);
