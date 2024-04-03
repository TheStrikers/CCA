import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import path from "path";

import adminRouter from "./Router/admin.router.js";
import userRouter from "./Router/player.router.js";
import TournamentRouter from "./Router/tournament.router.js";
import organizerRouter from "./Router/organizer.router.js";
import teamRouter from "./Router/team.router.js";
import categoryRouter from './Router/category.router.js';

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(express.static(path.join(dirname, 'public')));

// Forgot password
app.use("/admin", adminRouter);
app.use("/player", userRouter);
app.use("/tournament", TournamentRouter);
app.use("/organizer", organizerRouter);
app.use("/team", teamRouter);
app.use("/category", categoryRouter);

app.listen(3000, () => {
    console.log("Server started....");
});