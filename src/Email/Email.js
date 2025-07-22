import emailjs from "emailjs-com";

const SERVICE_ID = "service_0gxyny3";
const TEMPLATE_ID = "template_kxckcyh"; 
const PUBLIC_KEY = "38kAtO0b284xbpAri"; 

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      formData,
      PUBLIC_KEY
    );
    return response;
  } catch (error) {
    throw error;
  }
};

