import { Router } from "express";
import { testFollow } from "../controllers/follow.js";

const router = Router();

// definir rutas de follow
router.get('/test-follow', testFollow);

//exportar el Router
export default router;