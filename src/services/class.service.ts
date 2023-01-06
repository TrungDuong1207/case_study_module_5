import { AppDataSource } from "../configs/dataSource";
import { Class } from "../models/Class";
const classRepo = AppDataSource.getRepository(Class);

export class ClassService {
    static async querytAllClass (){
        return await classRepo.find();
    }

    
}