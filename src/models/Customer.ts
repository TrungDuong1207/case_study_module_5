import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import {
    Balance
} from './Balance';

@Entity()
export class Customer {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    type: string;

    @Column()
    password: string;

    @Column({ name: 'full_name' })
    fullName: string;

    @Column({ name: 'birth_day' })
    birthDay: string;

    @Column()
    avatar: string;

    @Column({ name: 'phone_number' })
    phoneNumber: string;

    @Column()
    address: string;

    @Column()
    email: string;

    @Column({ default: 1 })
    active: number;

    @OneToMany(() => Balance, (balance: Balance) => balance.customer, { cascade: true })
    balances: Balance[];

}