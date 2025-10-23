import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

export const teamSchema = new mongoose.Schema(
{
    name: { type: String, required: true },
    designation: { type: String, required: true }
    
}, { collection: 'team' });
    
export async function intializeTeam(uri)
{
    try
    {
        const connection = await mongoose.createConnection(uri)
        const Team = connection.model("Team", teamSchema);
        return Team
    }
    catch(err)
    {
        console.log(err)
    }
}
    

const Team = await intializeTeam(process.env.MONGO_URI_PROJECT)


export const getAllTeam = async () => {
    try {
      const members = await Team.find({});
      return members;
    } catch (e) {
      console.error("Error fetching team data: " + e.message);
      return [];
    }
  };


