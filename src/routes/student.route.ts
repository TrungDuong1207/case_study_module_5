import { Router } from "express";
import { StudentController } from "../controllers/student.controller";
import { MarkController } from "../controllers/mark.controller";
export const studentRoutes = Router();

studentRoutes.get("/", StudentController.getAllStudents);
studentRoutes.get("/:id", StudentController.getStudent);
studentRoutes.post("/", StudentController.addStudent);
studentRoutes.delete("/:id", StudentController.deleteStudent);
studentRoutes.put("/:id", StudentController.updateStudent);

studentRoutes.get("/marks/:idStudent", MarkController.getMark);
studentRoutes.post("/marks/:idStudent", MarkController.addMark);
studentRoutes.delete("/marks/:idMark", MarkController.deleteMark);
studentRoutes.put("/marks/:idMark", MarkController.updateMark)