import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { accountRepo } from '../models/repository/repository';


export class AuthService {
    static async getUser(req, res) {
        let phone = req.params.phone;
        let user = await accountRepo.findOneBy({phone: phone});
        return user;
    }
}