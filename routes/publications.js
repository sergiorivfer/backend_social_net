import { Router } from "express";
import {testPublication} from "../controllers/publication.js";

const router = Router();

// definir rutas de publication
router.get('/test-publication', testPublication);

//exportar el Router
export default router;