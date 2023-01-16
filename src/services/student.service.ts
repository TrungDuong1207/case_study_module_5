import axios from "axios";
import { studentRepo } from "../models/repository/repository";
import { Like } from "typeorm";

const firebase = require('../configs/firebase');

export class studentService {
    static async queryAllStudents(req, res) {
        return await studentRepo.find();
    }


    static async findStudentById(req, res) {
        let id = req.params.id;
        let student = await studentRepo.findOneBy({ id: id });
        return student;
    }

    static async getStudent(req, res) {
        const id = req.params.id;
        const student = await studentRepo.createQueryBuilder("student")
            .innerJoinAndSelect("student.studyClass", "studyClass")
            .where("student.id = :id", { id: id })
            .getOne();
        return student;

    }

    static async addOneStudent(req, res) {
        if (!req.file) {
            return res.status(400).send("Error: No files found")
        }

        let imageNameFireBase = req.file.originalname + Date.now();

        const blob = firebase.bucket.file("student-upload/" + imageNameFireBase);

        const blobWriter = blob.createWriteStream({
            metadata: {
                contentType: req.file.mimetype
            }
        })

        blobWriter.on('error', (err) => {
            console.log(err)
        })

        blobWriter.end(req.file.buffer);

        blobWriter.on('finish', async () => {

            let apiImg = await axios.get(`https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/student-upload%2F${imageNameFireBase}`);

            let imageToken = apiImg.data.downloadTokens;

            let imageName = `https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/student-upload%2F${imageNameFireBase}?alt=media&token=${imageToken}`;
            let student = await studentRepo.create({ ...req.body, image: imageName });
            await studentRepo.save(student);

        })



    }

    static async deleteOneStudent(req, res) {
        const id = req.params.id;
        await studentRepo.delete({ id: id });
    }

    static async editStudent(req, res) {
        const id = req.params.id;
        let student = req.body;
        await studentRepo.update(id, student);
    }

    static async searchStudent(req, res) {
        const values = req.query.name;
        const students = await studentRepo.findBy({
            studentName: Like(`%${values}%`),
        })
        return students;
    }


}