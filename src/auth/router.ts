import { Router } from "express";

import { AuthController } from "./controller.ts";

export function createAuthRouter(authController: AuthController) {
  const authRouter = Router();
  authRouter.post("/auth/register", authController.register);
  authRouter.post("/auth/login", authController.login);

  return authRouter;
}
