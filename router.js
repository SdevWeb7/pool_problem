import { Router } from "express";
import { home_controller } from "./controllers/home_controller.js";


const router = Router();

router.get('/', home_controller);


export default router;