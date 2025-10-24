import { getAllTeam, addTeamMember, removeTeamMember, updateTeamMember } from '../models/team.js'

export async function handleGetTeam(req, res)
{
    try {
      const team = await getAllTeam();
  
      res.status(200).json({
        status: "success",
        team: team
      });
    } 
    catch (error) {
      console.error("Error in /getTeam route:", error);
      res.status(500).json({ status: "error", message: "Failed to retrieve team data." });
    }
}

export async function handleAddTeamMember(req, res) {
    try {
        const result = await addTeamMember(req.body);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error in handleAddTeamMember:", error);
        res.status(500).json({ status: "error", message: "Failed to add team member." });
    }
}

export async function handleRemoveTeamMember(req, res) {
    try {
        const result = await removeTeamMember(req.body.id);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error in handleRemoveTeamMember:", error);
        res.status(500).json({ status: "error", message: "Failed to remove team member." });
    }
}

export async function handleUpdateTeamMember(req, res) {
    try {
        const result = await updateTeamMember(req.body.id, req.body.data);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error in handleUpdateTeamMember:", error);
        res.status(500).json({ status: "error", message: "Failed to update team member." });
    }
}