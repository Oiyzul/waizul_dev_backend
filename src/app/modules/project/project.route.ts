import { Router } from "express";
import ProjectControllers from "./project.cotroller";

const router = Router()

router.post("/", ProjectControllers.addProject);

router.get("/", ProjectControllers.getProjects);

router.put("/:id", ProjectControllers.updateProject);

export const ProjectRoutes = router