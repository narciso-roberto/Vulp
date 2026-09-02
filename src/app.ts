import express, { type Express, type Request, type Response } from "express";
import { userRouter } from "./users/index.ts";
import { errorHandling } from "./middlewares/ErrorHandling.ts";

const app: Express = express();

app.use(express.json());
app.use(userRouter);
app.use(errorHandling);

export { app };
