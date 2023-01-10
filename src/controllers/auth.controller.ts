import { AuthService } from "../services/auth.service";
export class AuthController {
//     static async login(req, res) {
//         try {
//             const teacher = await
//             if (user) {
//                 const comparePass = await bcrypt.compare(req.body.password, user.password);
//                 if (!comparePass) {
//                     req.flash("error", "Sai mật khẩu!!!");
//                     return res.redirect("/auth/login");
//                 }
//                 let payload = {
//                     user_id: user["id"],
//                     name: user["name"],
//                     username: user["email"],
//                     role: user["role"]
//                 }
//                 const token = jwt.sign(payload, '123456789', {
//                     expiresIn: 30 * 60 * 1000,

//                 });

//                 let options = {
//                     maxAge: 1000 * 60 * 30, // would expire after 30 minutes
//                     httpOnly: true, // The cookie only accessible by the web server
//                 }
//                 res.cookie('token', token, options)
//                 if (user.role === "admin") {
//                     res.redirect("/admin/home");
//                 } else {
//                     res.redirect("/user/home");
//                 }
//             } else {
//                 req.flash("error", "Sai tài khoản hoặc mật khẩu");
//                 res.redirect("/auth/login");
//             }
//         } catch (err) {
//             console.log(err);
//             res.redirect("/auth/login");
//         }
//     }
// }
}