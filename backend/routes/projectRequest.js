import express from 'express'
import jwt from 'jsonwebtoken'
import { handleRequestProject, handleGetProjectRequest, handleApproveProjectRequest, handleDeleteProject } from '../controllers/projectRequest.js';
import { sendMail } from '../utils/sendMail.js'

const router = express.Router()

router.post("/requestProject", handleRequestProject);

router.get("/getProjectRequests", handleGetProjectRequest)

router.post("/approveProjectRequest", handleApproveProjectRequest)

router.post("/deleteProjectRequest", handleDeleteProject)

  export default router