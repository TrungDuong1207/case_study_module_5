import { AuthController } from "../controllers/auth.controller";
import { Router } from 'express';

export const authRoutes = Router();

authRoutes.post("/login", AuthController.login);