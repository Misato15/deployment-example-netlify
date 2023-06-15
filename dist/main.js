"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express = require("express");
const cors = require("cors");
const animal_1 = require("./routers/animal");
const keeper_1 = require("./routers/keeper");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/animal", animal_1.default);
app.use("/keeper", keeper_1.default);
app.listen(3000);
//# sourceMappingURL=main.js.map