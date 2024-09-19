import { Router } from "express";
import { AuthRoutes } from "../app/modules/auth/auth.route";
import { IntroductionRoutes } from "../app/modules/introduction/introduction.route";
import { AboutRoutes } from "../app/modules/about/about.route";
import { ProjectRoutes } from "../app/modules/project/project.route";

const router = Router()

const moduleRoutes = [
    {
        path: 'auth',
        route: AuthRoutes
    },
    {
        path: 'introduction',
        route: IntroductionRoutes
    },
    {
        path: 'about',
        route: AboutRoutes
    },
    {
        path: 'projects',
        route: ProjectRoutes
    }
]

moduleRoutes.forEach(moduleRoute => {
    router.use(moduleRoute.path, moduleRoute.route)
})

export default router;