import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ status: "error", message: "All fields required" });

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // change if using another provider
      auth: {
        user: process.env.ADMIN_MAIL,
        pass: process.env.ADMIN_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.ADMIN_MAIL,
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ status: "success", message: "Mail sent successfully!" });
  } catch (err) {
    console.error("Error sending mail:", err);
    res.status(500).json({ status: "error", message: "Failed to send email" });
  }
});

export default router;