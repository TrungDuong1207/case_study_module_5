import express from "express";
import bodyParser from 'body-parser';
import { AppDataSource } from "./src/configs/dataSource";
import route from "./src/routes/index.route";
const PORT = 8000;
const app = express();
app.use(bodyParser.json());
app.use(express.json());

AppDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.log("Error during Data Source initialization:", err)
  })

route(app);

app.listen(PORT, () => {
  console.log("App running with port: " + PORT)
})



