import express, { type Express, type Request, type Response } from "express";
import { router } from "./products/router.js";

const app: Express = express();

app.use(express.json());
app.use(router);

export { app };
