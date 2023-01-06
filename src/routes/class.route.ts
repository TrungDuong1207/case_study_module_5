import { Router } from "express";
import { ClassController } from "../controllers/class.controller";
export const classRoutes = Router();

classRoutes.get("/", ClassController.getAllClass);

