import { Router } from "express";
import { TransactionController } from "../controllers/transaction.controller";
export const transactionRoutes = Router();

transactionRoutes.get("/", TransactionController.getTransaction);
// transactionRoutes.get("/:id", ClassController.getClass);
// transactionRoutes.post("/", ClassController.addClass);
// transactionRoutes.delete("/:id", ClassController.deleteClass);
// transactionRoutes.put("/:id", ClassController.updateClass);


