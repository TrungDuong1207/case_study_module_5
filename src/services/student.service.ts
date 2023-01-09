
import { studentRepo } from "../models/repository/repository";

export class StudentService {
    static async queryAllStudents (req, res){
        return await studentRepo.find();
    }

    static async findStudentById(req, res) {
        let id = req.params.id;
        let student = await studentRepo.findOneBy({id: id});
        return student;
    }

    static async getStudent(req, res){
        const id = req.params.id;
        const student = await studentRepo.createQueryBuilder("student")
                                    .innerJoinAndSelect("student.studyClass","studyClass")                                 
                                    .where("student.id = :id",{id: id})
                                    .getOne();
        return student;
        
    }

    static async addOneStudent (req, res){    
        let student = await studentRepo.create(req.body);
        console.log(student);
        await studentRepo.save(student);
    }

    static async deleteOneStudent (req, res) {
        const id = req.params.id;
        await studentRepo.delete({id: id});
    }

    static async editStudent (req, res) {
        const id = req.params.id;
        let student = req.body;
        await studentRepo.update(id, student);
    }
}