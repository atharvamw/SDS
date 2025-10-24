import express from "express";
import { handleGetEvents } from "../controllers/event.js";

const router = express.Router()

router.get("/getEvents", handleGetEvents)

export default router