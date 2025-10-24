import express from 'express'
import { handleGetTeam } from '../controllers/team.js';

const router = express.Router()

router.get("/getTeam", handleGetTeam);

export default router