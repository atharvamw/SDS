// backend/models/events.js
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const eventSchema = new mongoose.Schema({
  tag: String,
  date: String,
  title: String,
}, { collection: "events" });

const conn = mongoose.createConnection(process.env.MONGO_URI_PROJECT, {
  // optional options if desired
  maxPoolSize: 10,
}).on("error", console.error);

export const Event = conn.model("Event", eventSchema);

export const getEvents = async () => {
  try {
    const data = await Event.find({}).sort({ date: -1 }).lean();
    return { status: "success", data };
  } catch (err) {
    console.error("getEvents error:", err);
    return { status: "error", message: "Failed to fetch events" };
  }
};
