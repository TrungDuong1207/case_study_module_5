import { studentService } from "../services/student.service";

export class StudentController {
    static async getAllStudents(req, res) {
        try {
            const students = await studentService.queryAllStudents(req, res);

            if (students) {

                res.status(200).json({ message: "Sucess", students: students })

            }

        } catch (err) {

            res.status(500).json({ message: err.mesage })

        }
    }

    static async getStudent(req, res) {
        try {
            const student = await studentService.getStudent(req, res);
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
            await studentService.addOneStudent(req, res);
            res.status(201).json({ message: "add student complete" });

        } catch (err) {
            res.status(500).json({ message: err.mesage })

        }
    }

    static async deleteStudent(req, res) {
        try {
            let studentDelete = await studentService.findStudentById(req, res);

            if (!studentDelete) {
                res.status(404).json({ message: "the student doesn't exist" })
            } else {
                await studentService.deleteOneStudent(req, res);
                res.status(204).json();
            }
        } catch (err) {

            res.status(500).json({ message: err.mesage })

        }
    }

    static async updateStudent(req, res) {
        try {
            let studentEdit = await studentService.findStudentById(req, res);

            if (!studentEdit) {
                res.status(404).json({ message: "the student doesn't exist" })
            } else {
                await studentService.editStudent(req, res);
                res.status(200).json({ message: "update class complete" });
            }
        } catch (err) {

            res.status(500).json({ message: err.mesage })

        }
    }
}