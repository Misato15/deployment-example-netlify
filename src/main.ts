import "dotenv/config";
import * as express from "express";
import * as cors from "cors";
import animalRouter from "./routers/animal";
import keeperRouter from "./routers/keeper";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/animal", animalRouter);
app.use("/keeper", keeperRouter);

app.listen(3000);
