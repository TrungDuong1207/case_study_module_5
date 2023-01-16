import {teacherRepo} from "../models/repository/repository";

export class FormTeachersService {
    static async getFormTeachers(req,res) {
        const formTeachers = await  teacherRepo.createQueryBuilder('teachers')
             .select(['teachers.id','teachers.name'])
            .innerJoinAndSelect('teachers.teacherDetails', 'teacherdetails')
            // .addSelect(['teacherdetails.studyClass'])
            .innerJoin('teacherdetails.studyClass', 'studyClass')
            .addSelect(['studyClass.className'])
            .where('teacherdetails.formTeacher = :formTeacher', {formTeacher: 1})
            .getMany();
        console.log(formTeachers)
        return formTeachers;

    }


}