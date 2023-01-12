import {Router} from "express";
import {subjectController} from "../controllers/subject.controller";
export  const subjectRouter = Router();

subjectRouter.get('/',subjectController.getAllSubject);
subjectRouter.get('/:id',subjectController.getSubject);
subjectRouter.post('/',subjectController.addSubject);
subjectRouter.delete('/:id',subjectController.deleteSubject);
subjectRouter.put('/:id',subjectController.updateSubject);