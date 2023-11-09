import { Transaction } from "../models/Transaction";
import { customerRepo, transactionRepo } from "../models/repository/repository";
import { AppDataSource } from "../configs/dataSource";

export class TransactionsService {
    static async getTransactionsAndBalances(): Promise<any[]> {
        try {
            const queryBuilder = await customerRepo.createQueryBuilder('c')
                .innerJoin('c.balances', 'b')
                .innerJoin(
                    (subQuery) =>
                        subQuery
                            .select([
                                't.`from`',
                                'SUM(CASE WHEN t.type = :deposit THEN 1 ELSE 0 END) as num_trans_deposit',
                                'SUM(CASE WHEN t.type = :deposit THEN t.amount ELSE 0 END) as total_amount_deposit',
                                'SUM(CASE WHEN t.type = :transfer THEN 1 ELSE 0 END) as num_trans_transfer',
                                'SUM(CASE WHEN t.type = :transfer THEN t.amount + t.fee ELSE 0 END) as total_amount_transfer',
                                'SUM(CASE WHEN t.type = :withdraw THEN 1 ELSE 0 END) as num_trans_withdraw',
                                'SUM(CASE WHEN t.type = :withdraw THEN t.amount + t.fee ELSE 0 END) as total_amount_withdraw',
                                'SUM(CASE WHEN t.type = :payment THEN 1 ELSE 0 END) as num_trans_payment',
                                'SUM(CASE WHEN t.type = :payment THEN t.amount + t.fee ELSE 0 END) as total_amount_payment',
                            ])
                            .from(Transaction, 't')
                            .where('t.type IN (:...types)', {
                                types: ['DEPOSIT', 'TRANSFER', 'WITHDRAW', 'PAYMENT'],
                            })
                            .andWhere('t.sourceAccountType = :sourceAccountType', {
                                sourceAccountType: 'NORMAL',
                            })
                            .andWhere('t.status = :status', {
                                status: 'SUCCESS',
                            })
                            .groupBy('t.`from`'),
                    'ts',
                    'c.phoneNumber = ts.`from`'
                )
                .select([
                    'ts.`from`',
                    'ts.num_trans_deposit + ts.num_trans_transfer + ts.num_trans_withdraw + ts.num_trans_payment as num_trans',
                    'ts.total_amount_deposit + ts.total_amount_transfer + ts.total_amount_withdraw + ts.total_amount_payment as total_amount',
                    'ts.num_trans_deposit',
                    'ts.total_amount_deposit',
                    'ts.num_trans_transfer',
                    'ts.total_amount_transfer',
                    'ts.num_trans_withdraw',
                    'ts.total_amount_withdraw',
                    'ts.num_trans_payment',
                    'ts.total_amount_payment',
                    'b.availableMoney',
                    'b.freezedMoney',
                ])
                .setParameter('deposit', 'DEPOSIT')
                .setParameter('transfer', 'TRANSFER')
                .setParameter('withdraw', 'WITHDRAW')
                .setParameter('payment', 'PAYMENT')
                .orderBy('c.phoneNumber');

            const result = await queryBuilder.getRawMany();
            return result;
        } catch (e) {
            console.log("message", e.message);
            console.log("stack", e.stack)
        }

    }

    static async getTransactions(): Promise<any[]> {
        const queryBuilder = await transactionRepo.createQueryBuilder('t')
            .select(['t.`from`', 't.id'])
        const result = await queryBuilder.getMany();
        return result;
    }

    static async getTransactions2(): Promise<any[]> {
        try {
            const queryBuilder = await AppDataSource.createQueryBuilder()
                .select([
                    't.`from`',
                    'SUM(CASE WHEN t.type = "DEPOSIT" THEN 1 ELSE 0 END) as num_trans_deposit',
                    'SUM(CASE WHEN t.type = "DEPOSIT" THEN t.amount ELSE 0 END) as total_amount_deposit',
                    'SUM(CASE WHEN t.type = "TRANSFER" THEN 1 ELSE 0 END) as num_trans_transfer',
                    'SUM(CASE WHEN t.type = "TRANSFER" THEN t.amount + t.fee ELSE 0 END) as total_amount_transfer',
                    'SUM(CASE WHEN t.type = "WITHDRAW" THEN 1 ELSE 0 END) as num_trans_withdraw',
                    'SUM(CASE WHEN t.type = "WITHDRAW" THEN t.amount + t.fee ELSE 0 END) as total_amount_withdraw',
                    'SUM(CASE WHEN t.type = "PAYMENT" THEN 1 ELSE 0 END) as num_trans_payment',
                    'SUM(CASE WHEN t.type = "PAYMENT" THEN t.amount + t.fee ELSE 0 END) as total_amount_payment',
                ])
                .from(Transaction, 't')
                .where('t.type IN (:...types)', {
                    types: ['DEPOSIT', 'TRANSFER', 'WITHDRAW', 'PAYMENT'],
                })
                .andWhere('t.sourceAccountType = :sourceAccountType', {
                    sourceAccountType: 'NORMAL',
                })
                .andWhere('t.status = :status', {
                    status: 'SUCCESS',
                })
                .groupBy('t.`from`')

            const result = await queryBuilder.getRawMany();
            return result;
        } catch (e) {
            console.log("message", e.message);
            console.log("stack", e.stack)
        }

    }

}