import { Router } from "express";
import { userController } from "./controller.js";

const userRouter = Router();

userRouter.get("/user/:id", userController.getById);
userRouter.post("/user/:id", userController.postProduct);
userRouter.put("/user/:id", userController.putProduct);
userRouter.delete("/user/:id", userController.deleteProduct);

export { userRouter };
