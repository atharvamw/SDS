import express from 'express'
import { handleRequestProject, handleGetProjectRequest, handleApproveProjectRequest, handleDeleteProject, handleRejectProject } from '../controllers/projectRequest.js';

const router = express.Router()

router.post("/requestProject", handleRequestProject);

router.get("/getProjectRequests", handleGetProjectRequest)

router.post("/approveProjectRequest", handleApproveProjectRequest)

router.post("/rejectProjectRequest", handleRejectProject);

router.post("/deleteProjectRequest", handleDeleteProject)

export default router