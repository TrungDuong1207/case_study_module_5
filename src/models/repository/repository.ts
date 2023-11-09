import { AppDataSource } from "../../configs/dataSource";
import { Class } from "../Class";
import { Marks } from "../Marks";
import { Students } from "../Students";
import { Accounts } from "../Account";
import { Teachers } from "../Teachers";
import { Subjects } from "../Subjects";
import { TeacherDetails } from "../TeacherDetails";
import { Transaction } from "../Transaction";
import { Customer } from "../Customer";
import { Balance } from "../Balance";

export const classRepo = AppDataSource.getRepository(Class);
export const studentRepo = AppDataSource.getRepository(Students);
export const markRepo = AppDataSource.getRepository(Marks);
export const accountRepo = AppDataSource.getRepository(Accounts);
export const teacherRepo = AppDataSource.getRepository(Teachers);
export const subjectRepo = AppDataSource.getRepository(Subjects);
export const teacherDetailRepo = AppDataSource.getRepository(TeacherDetails);
export const transactionRepo = AppDataSource.getRepository(Transaction);
export const customerRepo = AppDataSource.getRepository(Customer);
export const balanceRepo = AppDataSource.getRepository(Balance);

