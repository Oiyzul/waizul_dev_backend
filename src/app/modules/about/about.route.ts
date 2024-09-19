import { Router } from "express";
import AboutControllers from "./about.controller";

const router = Router();

router.post("/", AboutControllers.addAboutMe);

router.get("/", AboutControllers.getAboutMe);

router.put("/:id", AboutControllers.updateAboutMe);

export const AboutRoutes = router;
