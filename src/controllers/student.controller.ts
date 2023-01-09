import { StudentService } from "../services/student.service";

export class StudentController {
    static async getAllStudents(req, res) {
        try {
            const students = await StudentService.queryAllStudents(req, res);

            if (students) {

                res.status(200).json({ message: "Sucess", students: students })

            }

        } catch (err) {

            res.status(500).json({ message: err.mesage })

        }
    }

    static async getStudent(req, res) {
        try {
            const student = await StudentService.getStudent(req, res);
            if (student) {
                res.status(200).json({ message: "Sucess", student: student });

            } else {
                res.status(404).json({ message: "student don't exist " });
            }

        } catch (err) {

            res.status(500).json({ message: err.mesage });

        }
    }

    static async addStudent(req, res) {
        try {
            await StudentService.addOneStudent(req, res);
            res.status(201).json({ message: "add student complete" });

        } catch (err) {
            res.status(500).json({ message: err.mesage })

        }
    }

    static async deleteStudent(req, res) {
        try {
            let studentDelete = await StudentService.findStudentById(req, res);

            if (!studentDelete) {
                res.status(404).json({ message: "the student doesn't exist" })
            } else {
                await StudentService.deleteOneStudent(req, res);
                res.status(204).json();
            }
        } catch (err) {

            res.status(500).json({ message: err.mesage })

        }
    }

    static async updateStudent(req, res) {
        try {
            let studentEdit = await StudentService.findStudentById(req, res);

            if (!studentEdit) {
                res.status(404).json({ message: "the student doesn't exist" })
            } else {
                await StudentService.editStudent(req, res);
                res.status(200).json({ message: "update class complete" });
            }
        } catch (err) {

            res.status(500).json({ message: err.mesage })

        }
    }
}