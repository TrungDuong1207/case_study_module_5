import { markRepo, studentRepo } from "../models/repository/repository";


export class MarkService {
    static async queryMark (req, res){
        const id = req.params.id;
        const student = await studentRepo.createQueryBuilder("student")
                                    .select(["student.studentName"])
                                    .innerJoinAndSelect("student.studyClass","studyClass")                                  
                                    .innerJoinAndSelect("student.marks","mark")
                                    .innerJoinAndSelect("mark.subject","subject")                                                                    
                                    .where("student.id = :id",{id: id})
                                    .getOne();
        return student;
        
    }

    static async addOneMark(req, res){
        const idStudent = req.params.id;
        const mark= {...req.body, student: +idStudent};
        const newMark = await markRepo.create(mark);
        await markRepo.save(newMark);
    }
    
    
}