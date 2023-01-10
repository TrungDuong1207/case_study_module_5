import { AuthService } from "../services/auth.service";
import {bcrypt} from "bcrypt";
import {jwt} from "jsonwebtoken";
export class AuthController {
    static async login(req, res) {
        try {
            const user = await AuthService.getUser(req, res);
            if (user) {
                const comparePass = await bcrypt.compare(req.body.password, user.password);
                if (!comparePass) {
                    return res.status(401).json()
                }
                let payload = {
                    phone: user.phone,
                    userName: user.userName,
                    username: user["email"],
                    role: user.role
                }
                const token = jwt.sign(payload, '123456789', {
                    expiresIn: 30 * 60 * 1000,

                });

                res.status(200).json({token: token});
            } else {
                
            }
        } catch (err) {
            console.log(err);
            res.redirect("/auth/login");
        }
    }
}
