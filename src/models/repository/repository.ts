import { AppDataSource } from "../../configs/dataSource";
import { Class } from "../Class";
import { Marks } from "../Marks";
import { Students } from "../Students";
import {Teachers} from "../Teachers";
export const classRepo = AppDataSource.getRepository(Class);
export const studentRepo = AppDataSource.getRepository(Students);
export const markRepo = AppDataSource.getRepository(Marks);
export  const teacherRepo = AppDataSource.getRepository(Teachers);
