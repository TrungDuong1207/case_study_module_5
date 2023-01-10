import { classRoutes } from "./class.route";
import { studentRoutes } from "./student.route";
import {teacherRoutes} from "./teacher.route";

function route(app) {

    app.use("/class", classRoutes);

    app.use("/students", studentRoutes);

    app.use("/teacher", teacherRoutes);

    // app.use("/subject", subjectRoutes);


}

export default route;