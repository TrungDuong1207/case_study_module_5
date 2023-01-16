import {Router} from "express";
import {TeacherController} from "../controllers/teacher.controller";




export const teacherRoutes = Router();
teacherRoutes.get("/", TeacherController.getAllteacher);
teacherRoutes.get("/:id", TeacherController.getTeacher);
teacherRoutes.post("/", TeacherController.addTeachers);
teacherRoutes.delete("/:id", TeacherController.deleteTeacher);
teacherRoutes.put("/:id", TeacherController.updateteacher);
// teacherRoutes.get("/formteacher",)

// teacherRoutes.get("/marks/:idStudent", MarkController.getMark);
// teacherRoutes.post("/marks/:idStudent", MarkController.addMark);
// teacherRoutes.delete("/marks/:idMark", MarkController.deleteMark);
