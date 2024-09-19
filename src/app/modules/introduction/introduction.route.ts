import { Router } from "express";
import IntroductionControllers from "./introduction.controller";

const router = Router();

router.post("/", IntroductionControllers.addIntroduction);

router.get("/", IntroductionControllers.getIntroduction);

router.put("/:id", IntroductionControllers.updateIntroduction);

export const IntroductionRoutes = router;
