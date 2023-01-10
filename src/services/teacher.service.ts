import {studentRepo, teacherRepo} from "../models/repository/repository";

export class TeacherService {
    static async queryAllTeacher(req, res) {
        return await teacherRepo.find();
    }

    static async findTeacherById(req, res) {
        let id = req.params.id;
        let teacher = await teacherRepo.findOneBy({id: id});
        return teacher;
    }
    static async addOneTeacher (req, res){
        let teacher = await teacherRepo.create(req.body);
        console.log(teacher);
        await teacherRepo.save(teacher);
    }

    static async deleteOneTeacher (req, res) {
        const id = req.params.id;
        await teacherRepo.delete({id: id});
    }

    static async editTeacher (req, res) {
        const id = req.params.id;
        let teacher = req.body;
        await teacherRepo.update(id, teacher);
    }

    // static async getTeacher(req, res) {
    //     const id = req.params.id;
    //     const teacher = await teacherRepo.createQueryBuilder("teacher")
    //         .innerJoinAndSelect("student.studyClass", "studyClass")
    //         .where("student.id = :id", {id: id})
    //         .getOne();
    //     return student;


    }