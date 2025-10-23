import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

export const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String },
    image: { type: String },
    email: { type: String },
    name: {type: String},
    date: {type: Date}
});

export const Project = mongoose.createConnection(process.env.MONGO_URI_PROJECT).model("Sd", projectSchema);

export const getProjects = async()=>{

    try
    {
        const resultData = Project.find({});
        return resultData
    }
    catch(error){
        console.log(error)
    }
}

export async function addProject(projectObj)
{
    try
    {
        if(projectObj.title && projectObj.description)
        {
            if(Project.findOne({title: projectObj.title}))
            {
                return {"status": "failed", "message": "Project Title Already Exists"}
            }
            else
            {
                const newProj = await Project.create({
                    title: projectObj.title,
                    description: projectObj.description,
                    category: projectObj.category,
                    image: projectObj.image
                })
                console.log(newProj)
                return {"status": "success"}
            }
        }
        else
        {
            return {"status": "failed", "message": "Please Enter all required fields"}
        }

    }
    catch(err)
    {
        console.error(err)
    }
}

export async function deleteProject(id)
{
    try
    {
        if(id && (await Project.findByIdAndDelete(id))?.id == id)
        {
            return {status: "success", "message": "Deleted the Project!"}
        }
        else
        {
            return {"status": "failed", "message": "Could not Delete Your Project!"}
        }

    }
    catch(err)
    {
        console.error(err)
    }
}