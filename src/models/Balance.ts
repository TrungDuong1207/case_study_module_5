import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Customer } from './Customer';

@Entity('balance')
export class Balance {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Customer, (customer: Customer) => customer.balances)
    @JoinColumn({ name: 'customer_id' })
    customer: Customer;

    @Column({ name: 'customer_id' })
    customerId: number;

    @Column({ default: 'NORMAL' })
    type: string;

    // số dư khả dụng
    @Column({ name: 'available_money', type: 'decimal', precision: 20, scale: 4, default: 0 })
    availableMoney: number;

    @Column({ name: 'freezed_money', type: 'decimal', precision: 20, scale: 4, default: 0 })
    freezedMoney: number;
}