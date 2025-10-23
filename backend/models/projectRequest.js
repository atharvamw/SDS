import mongoose from "mongoose";
import dotenv from "dotenv"
import { Project } from "./project.js";

dotenv.config();

export const projectRequestSchema = new mongoose.Schema({
    name: String,
    email: String,
    title: String,
    description: String,
    status: { type: String, default: "pending" },
    createdAt: { type: Date, default: Date.now },
  },{collection: "project_requests"});

const ProjectRequest = mongoose.createConnection(process.env.MONGO_URI_PROJECT).model("project_request", projectRequestSchema);

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

export const getProjectRequest = async()=> 
{

  try
  {
      const data = await ProjectRequest.find({})
      return {status: "success", data: data}
  }
  catch(err)
  {
      return {status: "error", message: "Failed to Fetch Project Requests" }
  }
}

export async function approveProjectRequest(id)
{
    try
    {
      const data = await ProjectRequest.findById(id)
      
      if(data._id != id)
      {
        return {status: "failed", message: "Did not find your project!"}
      }

      const result = await Project.create({
        _id: data._id,
        name: data.name,
        email: data.email,
        title: data.title,
        description: data.description,
        createdAt: data.createdAt
      })

      if(result._id != id)
      {
          return {status: "failed", message: "Could not approve your project!"}
      }

      const delRes = await ProjectRequest.findByIdAndDelete(id)

      if(delRes._id != id)
      {
         return {status: "failed", message: "Could not approve your project!"}
      }

      return {status: "success", data: data}

    }
    catch(err)
    {
      return {status: "failed", message: "Invalid Project Id, Could'nt Approve It", error: err}
    }
}
