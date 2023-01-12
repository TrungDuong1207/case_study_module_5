
import { studentRepo } from "../models/repository/repository";
const firebase = require('../configs/firebase');

export class studentService {
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
        if(!req.file) {
            return res.status(400).send("Error: No files found")
        } 
        console.log(req.file);
        
        const blob = firebase.bucket.file("student-upload/"+req.file.originalname);
       
        const blobWriter = blob.createWriteStream({
            metadata: {
                contentType: req.file.mimetype
            }
        })
        
        blobWriter.on('error', (err) => {
            console.log(err)
        })
        
        blobWriter.on('finish', () => {
            console.log("add student finish");
            
        })
    
        blobWriter.end(req.file.buffer);
          
        let student = await studentRepo.create({...req.body, image: req.file.originalname});
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