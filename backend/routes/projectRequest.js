import express from 'express'
import {createProjectRequest} from "../models/projectRequest.js"

const router = express.Router()
router.post("/requestProject", async (req, res) => {
    try {
      const { name, email, title, description } = req.body;
  
      if (!name || !email || !title || !description)
        return res.status(400).json({ status: "failed", message: "All fields required" });
  
      const result = await createProjectRequest(name,email, title, description)
      res.status(201).json(result);
  
    } catch (e) {
      console.error(e);
      res.status(500).json({ status: "error", message: "Server error" });
    }
  });

  export default router