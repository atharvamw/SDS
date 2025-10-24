import express from 'express';
import { handleGetTeam, handleAddTeamMember, handleRemoveTeamMember, handleUpdateTeamMember } from '../controllers/team.js';

const router = express.Router();

router.get("/getTeam", handleGetTeam);
router.post("/addTeamMember", handleAddTeamMember);
router.post("/removeTeamMember", handleRemoveTeamMember);
router.post("/updateTeamMember", handleUpdateTeamMember);

export default router;