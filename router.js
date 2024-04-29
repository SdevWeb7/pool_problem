import { Router } from "express";
import { admin_controller, home_controller, update_story_controller } from "./controllers/home_controller.js";
import { create_story, delete_story, update_story } from "./controllers/crud_controller.js";
import { login, logout, subscribe } from "./controllers/auth_controller.js";


const router = Router();

router.get('/', home_controller);


router.post('/subscribe', subscribe)
router.post('/login', login)
router.get('/logout', logout)


router.get('/admin', admin_controller);


router.get('/update_story/:id', update_story_controller);


router.post('/create_story', create_story);
router.post('/update_story/:id', update_story);
router.post('/delete_story/:id', delete_story);

export default router;