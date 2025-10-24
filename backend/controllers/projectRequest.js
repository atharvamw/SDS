import jwt from 'jsonwebtoken'
import { sendMail } from '../utils/sendMail.js'
import {createProjectRequest, getProjectRequest, approveProjectRequest, deleteProjectRequest} from "../models/projectRequest.js"

export async function handleRequestProject(req, res)
{
    try {
      const { name, email, title, description } = req.body;
  
      if (!name || !email || !title || !description)
        return res.status(400).json({ status: "failed", message: "All fields required" });
      
      const result = await createProjectRequest(name,email, title, description)

    if(result.status=="success") 
    {
        await sendMail(
        email,
        "Your Project Request Has Been Received!",
        "projectRequestSent",
        { name: name, title: title }
      );
    }

      res.status(201).json(result);
  
    } catch (e) {
      console.error(e);
      res.status(500).json({ status: "error", message: "Server error" });
    }
}

export async function handleGetProjectRequest(req, res)
{

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
}

export async function handleApproveProjectRequest(req, res)
{

  try{
    if(req.cookies.token && req.body.id && jwt.verify(req.cookies.token, process.env.JWT_SECRET))
    {
      const projRequests = await approveProjectRequest(req.body.id)
      const project = projRequests.data
      if(projRequests.status=="success") {
        // Notify applicant
        await sendMail(
        project.email,
        "Your Project Has Been Approved 🎉",
        "projectApproved",
        { name: project.name, title: project.title }
      );

      // Notify admin
      await sendMail(
        process.env.ADMIN_MAIL,
        `Project Approved: ${project.title}`,
        "projectApproved",
        { name: "Admin", title: project.title }
      );

      res.status(200).json(projRequests)
      }
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
    console.log(err)
    res.json({status: "error", message: err})
  }

}

export async function handleRejectProject(req, res) {
  try {
    // Verify token and ID
    if (!req.cookies.token || !req.body.id)
      return res.status(400).json({ status: "failed", message: "Missing project ID or not authenticated" });

    const verified = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    if (!verified)
      return res.status(401).json({ status: "failed", message: "Invalid or expired token" });

    const id = req.body.id;
    const projectData = await deleteProjectRequest(id); // reuse delete logic

    if (projectData.status === "success") {
      // Get project details before deletion if needed
      // To do this, you can first fetch before deleting in your model later

      const { email, name, title } = req.body; // make sure frontend sends these

      // Send rejection email to applicant
      await sendMail(
        email,
        "Your Project Request Has Been Rejected ❌",
        "projectRejected",
        { name, title }
      );

      // Send info mail to admin
      await sendMail(
        process.env.ADMIN_MAIL,
        `Project Rejected: ${title}`,
        "projectRejected",
        { name: "Admin", title }
      );

      res.status(200).json({ status: "success", message: "Project rejected and emails sent" });
    } else {
      res.status(500).json({ status: "failed", message: "Error rejecting project" });
    }
  } catch (error) {
    console.error("Error rejecting project:", error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
}


export async function handleDeleteProject(req,res)
{
    if(req.cookies.token && jwt.verify(req.cookies.token,process.env.JWT_SECRET))
    {
        const result = await deleteProjectRequest(req.body.id)
        res.json(result);
    }    
    else
        res.json({"authentication": "failed", "message": "You must be Logged in as an Admin!"});
}