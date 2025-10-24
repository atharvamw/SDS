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

const Team = mongoose.createConnection(process.env.MONGO_URI_PROJECT).model("Team", teamSchema);

export const getAllTeam = async () => {
    try {
      const members = await Team.find({});
      return members;
    } catch (e) {
      console.error("Error fetching team data: " + e.message);
      return [];
    }
  };

export async function addTeamMember(memberObj) {
    try {
        if (memberObj.name && memberObj.designation) {
            const newMember = await Team.create({
                name: memberObj.name,
                designation: memberObj.designation
            });
            return { status: "success", message: "Team member added successfully!", data: newMember };
        } else {
            return { status: "failed", message: "Please provide all required fields (name, designation)." };
        }
    } catch (err) {
        console.error(err);
        return { status: "error", message: "Failed to add team member." };
    }
}

export async function removeTeamMember(id) {
    try {
        if (id && (await Team.findByIdAndDelete(id))?.id === id) {
            return { status: "success", message: "Team member removed successfully!" };
        } else {
            return { status: "failed", message: "Could not remove the team member!" };
        }
    } catch (err) {
        console.error(err);
        return { status: "error", message: "Failed to remove team member." };
    }
}

export async function updateTeamMember(id, data) {
    try {
        if (id && (await Team.updateOne({ _id: id }, { $set: data }))?.acknowledged) {
            return { status: "success", message: "Team member updated successfully!" };
        } else {
            return { status: "failed", message: "Could not update the team member!" };
        }
    } catch (err) {
        console.error(err);
        return { status: "error", message: "Failed to update team member." };
    }
}


