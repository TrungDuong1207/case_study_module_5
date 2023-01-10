import { classRoutes } from "./class.route";
import { studentRoutes } from "./student.route";
import {authRoutes} from "./auth.route";

function route(app) {
    app.use("/auth", authRoutes);
    
    app.use("/class", classRoutes);

    app.use("/students", studentRoutes);
    
}

export default route;