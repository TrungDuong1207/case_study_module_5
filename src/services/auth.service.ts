import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { accountRepo } from '../models/repository/repository';
import {teachR}
export class AuthService{
    static async getUser(req, res){
        let phone = req.body.phone;
       let teacher =  await accountRepo.findOneBy({  });
    }
}