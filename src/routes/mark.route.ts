import {Router} from "express";
import {MarkController} from "../controllers/mark.controller";
export const markRoutes = Router();

markRoutes.get("marks/:idStudent", MarkController.getMark);
markRoutes.post("marks/:idStudent", MarkController.addMark);
markRoutes.delete("marks/:idMark", MarkController.deleteMark);
markRoutes.put("marks/:idMark", MarkController.updateMark)