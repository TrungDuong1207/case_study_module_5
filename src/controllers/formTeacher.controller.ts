import {FormTeachersService} from "../services/FormTeachers.service";
import {teacherRepo} from "../models/repository/repository";

export class FormTeacherController {
   static async getAllFormTeacher (req,res) {
       try {
           const formTeachers = await FormTeachersService.getFormTeachers(req,res);
           res.status(200).json(formTeachers);
       } catch (e) {
           console.log(e.message);
       }
   }
}