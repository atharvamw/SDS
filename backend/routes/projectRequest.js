import express from 'express'
import jwt from 'jsonwebtoken'
import {createProjectRequest, getProjectRequest, approveProjectRequest, deleteProjectRequest} from "../models/projectRequest.js"

const router = express.Router()
router.post("/requestProject", async (req, res) => {
    try {
      const { name, email, title, description } = req.body;
  
      if (!name || !email || !title || !description)
        return res.status(400).json({ status: "failed", message: "All fields required" });
      
      const result = await createProjectRequest(name,email, title, description)
      res.status(201).json(result);
  
    } catch (e) {
      console.error(e);
      res.status(500).json({ status: "error", message: "Server error" });
    }
  });

  router.get("/getProjectRequest", async (req, res) => {

    try{
      if(req.cookies.token && jwt.verify(req.cookies.token, process.env.JWT_SECRET))
      {
        const projRequests = await getProjectRequest()
        res.status(200).json(projRequests)
      }
      else
      {
        res.status(401).json({"status": "failed", "message": "Please Login with a valid account!"})
      }
    }
    catch(err)
    {
      res.status(500).json({status: "error", message: err})
    }

  })

  router.post("/approveProjectRequest", async (req, res) => {

    try{
      if(req.cookies.token && req.body.id && jwt.verify(req.cookies.token, process.env.JWT_SECRET))
      {
        const projRequests = await approveProjectRequest(req.body.id)
        if(projRequests.status=="success")
          res.status(200).json(projRequests)
        else
          res.status(500).json(projRequests)
      }
      else if(!req.body.id)
      {
        res.status(404).json({"status": "failed", "message": "Please Enter a valid project id"})
      }
      else
      {
        res.status(401).json({"status": "failed", "message": "Please Login with a valid account!"})
      }
    }
    catch(err)
    {
      res.json({status: "error", message: err})
    }

  })

  router.post("/deleteProjectRequest", async (req,res)=>{

    if(req.cookies.token && jwt.verify(req.cookies.token,process.env.JWT_SECRET))
    {
        const result = await deleteProjectRequest(req.body.id)
        res.json(result);
    }    
    else
        res.json({"authentication": "failed", "message": "You must be Logged in as an Admin!"});
})

  export default router