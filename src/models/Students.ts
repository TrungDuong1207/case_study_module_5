import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Class } from "./Class";
import { Marks } from "./Marks";
export type GenderType = "male" | "female";

@Entity()
export class Students {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({ type: "varchar", length: 50 })
    studentName: string;

    @Column({ type: "date" })
    dateOfBirth: Date;

    @Column({ type: "varchar", length: 50 })
    address: string;

    @Column({ type: "enum", enum: ['male', 'female'] })
    gender: GenderType;

    @ManyToOne(() => Class, classT => classT.students)
    classT: Class;

    @OneToMany(() => Marks, (mark) => mark.student)
    marks: Marks[];

}