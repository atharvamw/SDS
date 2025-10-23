import express from 'express'
import {getProjects, addProject, deleteProject} from "../models/project.js"
import jwt from 'jsonwebtoken'

const router = express.Router()

router.get("/getProjects", async (req, res) => {
    try {
        // Ensure the correct DB is connected (using the project URI as in your listen block
        
        // Fetch all projects using the function from db.js
        const projects = await getProjects();

        // Send the data to the client
        res.status(200).json({ 
            status: "success",
            projects: projects 
        });

    } catch (error) {
        console.error('Error in /get route:', error);
        // Fallback for internal server errors
        res.status(500).json({ status: "error", message: "Failed to retrieve projects." });
    }
});

router.post("/addProject", async (req,res)=>{

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
})

router.post("/deleteProject", async (req,res)=>{

    if(req.cookies.token && jwt.verify(req.cookies.token,process.env.JWT_SECRET))
    {
        const result = await deleteProject(req.body.id)
        res.json(result);
    }    
    else
        res.json({"authentication": "failed", "message": "You must be Logged in as an Admin!"});
})

export default router