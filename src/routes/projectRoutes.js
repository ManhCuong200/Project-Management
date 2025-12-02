import express from "express";
import {
  createProject,
  getALL,
  getProjectById,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";
const router = express.Router();
router.post("/create", createProject);
router.get("/all", getALL);
router.get("/:id", getProjectById);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;
