import { getAllTeam } from '../models/team.js'

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