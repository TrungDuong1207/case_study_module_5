import {classRoutes} from "./class.route";
import {studentRoutes} from "./student.route";
import {authRoutes} from "./auth.route";
import {teacherRoutes} from "./teacher.route";
import {subjectRouter} from "./subject.route";
import {formTeacherRoutes} from "./formteacher.routers";

function route(app) {
    app.use("/auth", authRoutes);

    app.use("/class", classRoutes);

    app.use("/students", studentRoutes);

    app.use("/teachers", teacherRoutes);

    app.use("/subject", subjectRouter);

    app.use("/formteachers", formTeacherRoutes);
}

export default route;