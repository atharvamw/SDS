import {getProjects, addProject, deleteProject, updateProject} from "../models/project.js"
import jwt from 'jsonwebtoken'

export async function handleGetProjects(req, res) 
{
    try {
        // Fetch all projects using the function from db.js
        const projects = await getProjects();

        // Send the data to the client
        res.status(200).json({ 
            status: "success",
            projects: projects 
        });

    } 
    catch (error) 
    {
        res.status(500).json({ status: "error", message: "Failed to retrieve projects." });
    }
}

export async function handleAddProject (req,res)
{
    if(req.cookies.token)
    {
        const user = jwt.verify(req.cookies.token,process.env.JWT_SECRET)
    
        if(user)
        {
            const result = await addProject(req.body)
            res.json(result);
        }    
        else
            res.json({"authentication": "failed", "message": "You must be Logged in as an Admin!"});
    }
    else
        res.json({"authentication": "failed", "message": "You must be Logged in as an Admin!"});
}

export async function handleDeleteProject(req,res)
{
    if(req.cookies.token && jwt.verify(req.cookies.token,process.env.JWT_SECRET))
    {
        const result = await deleteProject(req.body.id)
        res.json(result);
    }    
    else
        res.json({"authentication": "failed", "message": "You must be Logged in as an Admin!"});
}

export async function handleUpdateProject(req,res)
{
    if(req.cookies.token && jwt.verify(req.cookies.token,process.env.JWT_SECRET))
        {
            const result = await updateProject(req.body.id, req.body.data)
            res.json(result);
        }    
        else
            res.json({"authentication": "failed", "message": "You must be Logged in as an Admin!"});
}