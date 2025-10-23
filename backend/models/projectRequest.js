import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

export const projectRequestSchema = new mongoose.Schema({
    name: String,
    email: String,
    title: String,
    description: String,
    status: { type: String, default: "pending" },
    createdAt: { type: Date, default: Date.now },
  });

const ProjectRequest = mongoose.createConnection(process.env.MONGO_URI_PROJECT).model("project_requests", projectRequestSchema);

export const createProjectRequest = async (name,email,title,description) => 
{
  try {
    const newReq = await ProjectRequest.create({ name, email, title, description });
    return { status: "success", message: "Request saved successfully", data: newReq };
  } 
  catch (error) 
  {
    console.error("Error saving project request:", error);
    return { status: "error", message: "Failed to save project request" };
  }
};