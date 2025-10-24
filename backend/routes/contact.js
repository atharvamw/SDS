import express from "express";
import { sendMail } from "../utils/sendMail.js";

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ status: "failed", message: "All fields are required" });
    }

    // Send mail to admin
    await sendMail(
      process.env.ADMIN_MAIL,
      `📩 New Contact Message from ${name}`,
      "contactForm",
      { name, email, message }
    );

    res.status(200).json({ status: "success", message: "Message sent successfully" });
  } catch (error) {
    console.error("Error in contact route:", error);
    res.status(500).json({ status: "error", message: "Failed to send message" });
  }
});

export default router;
