import { MarkService } from "../services/mark.service";

export class MarkController {
    static async getMark(req, res) {
        try {
            const student = await MarkService.queryMark(req, res);
            if (student) {
                res.status(200).json({ message: "Sucess", student: student });

            } else {
                res.status(404).json({ message: "student don't exist " });
            }

        } catch (err) {

            res.status(500).json({ message: err.message });

        }
    }

    static async addMark(req, res) {
        try {
            const student = await MarkService.queryMark(req, res);
            for (let mark of student.marks) {
                if (mark.semester === req.body.semester && mark.subject.id === req.body.subject) {
                    return res.status(409).json({ message: "this mark of subject did exist" });
                }

            }

            await MarkService.addOneMark(req, res);
            res.status(201).json({ message: "add mark complete" });

        } catch (err) {
            res.status(500).json({ message: err.message })

        }
    }

    static async deleteMark(req, res) {
        try {
            await MarkService.deleteOneMark(req, res);
            res.status(204).json();
        } catch (err) {
            res.status(500).json({ message: err.message })

        }
    }

    static async updateMark(req, res) {
        try {
            await MarkService.editMark(req, res);
            res.status(200).json({ message: "update complete" });
        }catch(err) {

        res.status(500).json({ message: err.message })

    }
}



}