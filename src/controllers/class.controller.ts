import { AppDataSource } from "../configs/dataSource";
import { Class } from "../models/Class";

const classRepo = AppDataSource.getRepository(Class);

export class ClassController {
    static async getAllClass(req, res) {
        try {
            const classes = await classRepo.find();

            if (classes) {

                res.status(200).json({ message: "Sucess", classes: classes })

            }

        } catch (err) {

            res.status(500).json({ message: err.mesage })

        }
    }
}