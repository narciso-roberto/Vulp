import express, { type Express, type Request, type Response } from "express";
import { userRouter } from "./users/module.ts";
import { authRouter } from "./auth/module.ts";
import { AuthMiddleware } from "./middlewares/Auth.ts";
import { errorHandling } from "./middlewares/ErrorHandling.ts";

const app: Express = express();

app.use(express.json());
app.use(authRouter);

app.use(AuthMiddleware);
app.use(userRouter);

app.use(errorHandling);
export { app };
