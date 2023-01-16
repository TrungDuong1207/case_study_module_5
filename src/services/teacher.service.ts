import axios from "axios";
import { Like } from "typeorm";
import { teacherRepo } from "../models/repository/repository";
const firebase = require('../configs/firebase');

export class TeacherService {
    static async queryAllTeacher(req, res) {
        return await teacherRepo.find();
    }

    static async findTeacherById(req, res) {
        let id = req.params.id;
        let teacher = await teacherRepo.findOneBy({ id: id });
        return teacher;
    }

    static async findTeacherByPhone(req, res) {
        let phone = req.body.phone;
        let teacher = await teacherRepo.findOneBy({ phone: phone });
        return teacher;
    }


    static async addOneTeacher(req, res) {
        if (!req.file) {
            return res.status(400).send("Error: No files found");
        }

        let imageNameFireBase = req.file.originalname + Date.now();

        const blob = firebase.bucket.file("teachers-upload/" + req.file.originalname);

        const blobWriter = blob.createWriteStream({
            metadata: {
                contentType: req.file.mimetype
            }
        })

        blobWriter.on('error', (err) => {
            console.log(err)
        })

        blobWriter.on('finish', async () => {
            let apiImg = await axios.get(`https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/teachers-upload%2F${imageNameFireBase}`)
            console.log(apiImg);
            let imageToken = apiImg.data.downloadTokens;
            let imageName = `https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/teachers-upload%2F${imageNameFireBase}?alt=media&token=${imageToken}`;
            let teacher = await teacherRepo.create({ ...req.body, image: imageName });
            await teacherRepo.save(teacher);

        })

        blobWriter.end(req.file.buffer);

    }

    static async deleteOneTeacher(req, res) {
        const id = req.params.id;
        await teacherRepo.delete({ id: id });
    }

    static async editTeacher(req, res) {
        const id = req.params.id;
        let teacher = req.body;
        await teacherRepo.update(id, teacher);
    }

    static async searchTeacher(req, res) {
        const values = req.query.name;
        const teachers = await teacherRepo.findBy({
            name: Like(`%${values}%`)
        })
        return teachers;
    }



    // static async getTeacher(req, res) {
    //     const id = req.params.id;
    //     const teacher = await teacherRepo.createQueryBuilder("teacher")
    //         .innerJoinAndSelect("student.studyClass", "studyClass")
    //         .where("student.id = :id", {id: id})
    //         .getOne();
    //     return student;


}