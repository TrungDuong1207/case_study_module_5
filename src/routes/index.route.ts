import { classRoutes } from "./class.route";
function route(app) {

    app.use("/class", classRoutes);
    
}

export default route;