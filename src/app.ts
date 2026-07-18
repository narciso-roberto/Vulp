import express, { type Express, type Request, type Response } from "express";
import { productsRouter } from "./products/router.js";

const app: Express = express();

app.use(express.json());
app.use(productsRouter);

export { app };
