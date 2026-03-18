import emailjs from "emailjs-com";

const SERVICE_ID = "service_a10h5ps";
const AUTO_REPLY_TEMPLATE_ID = "template_8ydej5n";
const PUBLIC_KEY = "zmfVosgKtEfau8xx2";
const RECEIVE_MAIL_TEMPLATE_ID = "template_4vl3s46";

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      AUTO_REPLY_TEMPLATE_ID,
      formData,
      PUBLIC_KEY,
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const receiveEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      RECEIVE_MAIL_TEMPLATE_ID,
      formData,
      PUBLIC_KEY,
    );
    return response;
  } catch (error) {
    throw error;
  }
};
