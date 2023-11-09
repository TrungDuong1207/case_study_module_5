import { TransactionStatus, TransactionType } from '../enums';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'code', type: 'varchar', unique: true })
    code: string;

    @Column({ name: 'type' })
    type: TransactionType;

    @Column({ name: 'amount', type: 'decimal', precision: 20, scale: 4 })
    amount: number;

    @Column({ name: 'fee', type: 'decimal', precision: 20, scale: 4, default: 0 })
    fee: number;

    @Column({ name: 'status', type: 'varchar', default: TransactionStatus.PENDING })
    status: TransactionStatus | string;


    @Column({ name: 'from', nullable: true })
    from: string;

    @Column({ name: 'to', nullable: true })
    to: string;

    @Column({ name: 'note', nullable: true })
    note: string;

    @Column({ name: 'source_account_name', nullable: true })
    sourceAccountName: string;

    @Column({ name: 'source_account_type', nullable: true })
    sourceAccountType: string;

    @Column({ name: 'destination_account_name', nullable: true })
    destinationAccountName: string;

    @Column({ name: 'destination_account_type', nullable: true })
    destinationAccountType: string;
}