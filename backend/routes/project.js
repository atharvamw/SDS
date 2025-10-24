import express from 'express'
import { handleGetProjects, handleAddProject, handleDeleteProject} from '../controllers/project.js';
const router = express.Router()

router.get("/getProjects", handleGetProjects);

router.post("/addProject", handleAddProject)

router.post("/deleteProject", handleDeleteProject)

export default router