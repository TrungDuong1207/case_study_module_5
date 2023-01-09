import { classRoutes } from "./class.route";
import { studentRoutes } from "./student.route";

function route(app) {

    app.use("/class", classRoutes);

    app.use("/students", studentRoutes);
    
}

export default route;