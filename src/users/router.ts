import { Router } from "express";
import { UserController } from "./controller.ts";

export function createUserRouter(userController: UserController) {
  const userRouter = Router();

  userRouter.get("/user/:id", userController.getById);
  userRouter.post("/user", userController.postUser);
  userRouter.put("/user/:id", userController.putUser);
  userRouter.delete("/user/:id", userController.deleteUser);

  return userRouter;
}
