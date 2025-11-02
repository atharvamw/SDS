// backend/routes/events.js
import express from "express";
import { getEvents } from "../models/events.js";

const router = express.Router();

router.get("/getEvents", async (req, res) => {
  try {
    const events = await getEvents(); // from your model
    res.json({ status: "success", data: events });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Failed to fetch events" });
  }
});


export default router;
