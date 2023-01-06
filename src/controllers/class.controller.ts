import { ClassService } from "../services/class.service";

export class ClassController {
    static async getAllClass(req, res) {
        try {
            const classes = await ClassService.querytAllClass();

            if (classes) {

                res.status(200).json({ message: "Sucess", classes: classes })

            }

        } catch (err) {

            res.status(500).json({ message: err.mesage })

        }
    }
}