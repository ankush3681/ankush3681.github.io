import React, { useEffect, useRef, useState } from "react";
import { receiveEmail, sendEmail } from "../Email/Email";
import {
  ContactInfo,
  ContactInputBox,
  ContactTextArea,
  EmailIcon,
  LocationIcon,
  PhoneIcon,
} from "./helperConstant";
import Toast from "./Toast";

const Contact = ({ darkMode }) => {
  const formRef = useRef();
  const toastTimerRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const textDark = darkMode ? "text-white" : "text-dark";
  const bgDark = darkMode ? "bg-dark" : "bg-white";
  const bgDarkSecondary = darkMode ? "bg-dark-2" : "bg-white";
  const textBodyColor = darkMode ? "text-dark-6" : "text-body-color";
  const textInputColor = darkMode ? "text-white" : "text-dark";

  const showToast = (message, type = "success") => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    setToast({ message, type });
    toastTimerRef.current = setTimeout(() => {
      setToast(null);
      toastTimerRef.current = null;
    }, 4000);
  };

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const validateFields = (formData) => {
    const validationErrors = {};

    if (!formData.user_name.trim()) {
      validationErrors.user_name = "Please enter your name.";
    }
    if (!formData.user_email.trim()) {
      validationErrors.user_email = "Please enter your email.";
    }
    if (!formData.user_phone.trim()) {
      validationErrors.user_phone = "Please enter your phone number.";
    } else if (!/^\d+$/.test(formData.user_phone.trim())) {
      validationErrors.user_phone = "Only numbers are allowed.";
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Please enter a message.";
    }

    return validationErrors;
  };

  const clearFieldError = (field) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const { [field]: removed, ...rest } = prev;
      return rest;
    });
  };

  const handlePhoneChange = (event) => {
    const numericValue = event.target.value.replace(/\D/g, "");
    if (event.target.value !== numericValue) {
      event.target.value = numericValue;
    }
    clearFieldError("user_phone");
  };

  const sendEmailHandler = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = {
      user_name: form.user_name.value,
      user_email: form.user_email.value,
      user_phone: form.user_phone.value,
      message: form.message.value,
      receiver_email:'ankushkumar83623@gmail.com'
    };

    const validationErrors = validateFields(formData);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      setIsSubmitting(true);
      await sendEmail(formData);
      await receiveEmail(formData);
      showToast("Message sent successfully, Thankyou!", "success");
      form.reset();
    } catch (error) {
      console.error(error);
      showToast("Something went wrong. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
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
                    textColorClass={textInputColor}
                    error={errors.user_name}
                    aria-invalid={Boolean(errors.user_name)}
                    onChange={() => clearFieldError("user_name")}
                  />
                  <ContactInputBox
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    textColorClass={textInputColor}
                    error={errors.user_email}
                    aria-invalid={Boolean(errors.user_email)}
                    onChange={() => clearFieldError("user_email")}
                  />
                  <ContactInputBox
                    type="text"
                    name="user_phone"
                    placeholder="Your Phone"
                    textColorClass={textInputColor}
                    error={errors.user_phone}
                    aria-invalid={Boolean(errors.user_phone)}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    onChange={handlePhoneChange}
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Your Message"
                    name="message"
                    defaultValue=""
                    textColorClass={textBodyColor}
                    error={errors.message}
                    aria-invalid={Boolean(errors.message)}
                    onChange={() => clearFieldError("message")}
                  />

                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full rounded border border-primary bg-gradient-to-r from-[#3056D3] to-[#13C296] p-3 text-white text-lg font-semibold transition duration-300 ease-in-out hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                        isSubmitting ? "cursor-not-allowed opacity-70 hover:scale-100" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          <span>Sending...</span>
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    </section>
    <Toast toast={toast} />
  </>
);
};

export default Contact;
