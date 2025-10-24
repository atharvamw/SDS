import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { mailTemplates } from "./mailTemplates.js";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_MAIL,
    pass: process.env.ADMIN_MAIL_PASS,
  },
});

export const sendMail = async (to, subject, template, data = {}) => {
  try {
    const mailOptions = {
      from: process.env.ADMIN_MAIL,
      to,
      subject,
      html: mailTemplates[template](data), // template-based email content
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Mail sent successfully:", info.messageId);
    return { status: "success", info };
  } catch (error) {
    console.error("❌ Error sending mail:", error);
    return { status: "error", error: error.message };
  }
};
