import { Router, Request, Response } from "express";
import { logMiddleware } from "../middleware/log";
import { registerController, loginController } from "../controllers/authController"
const router = Router();


//http://localhost:3002/auth/register [POST]
router.post('/register', registerController);
router.post('/login', loginController);


export { router };