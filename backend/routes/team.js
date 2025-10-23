import express from 'express'
import { getAllTeam } from '../models/team.js'

const router = express.Router()

router.get("/getTeam", async (req, res) => {
    try {
      const team = await getAllTeam();
  
      res.status(200).json({
        status: "success",
        team: team
      });
    } catch (error) {
      console.error("Error in /getTeam route:", error);
      res.status(500).json({ status: "error", message: "Failed to retrieve team data." });
    }
  });

export default router