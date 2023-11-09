import { Request, Response } from "express";
import { TransactionsService } from "../services/transaction.service";

export class TransactionController {
    static async getTransaction(req: Request, res: Response) {
        try {
            const transactions = await TransactionsService.getTransactionsAndBalances();
            res.status(200).json(transactions);
        } catch (e) {
            console.log(e.message);
        }
    }

}