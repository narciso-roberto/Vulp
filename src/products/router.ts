import { Router } from "express";
import { controller } from "./controller.js";

const router = Router();

router.get("/product/:id", controller.getById);

export { router };
