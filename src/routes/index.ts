import { Router } from "express";

import { gameController } from "../controllers/game-controller.js";

const router = Router();

router.get("/", gameController);

export default router;
