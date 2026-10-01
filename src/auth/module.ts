import { createAuthRouter } from "./router.ts";
import { AuthController } from "./controller.ts";
import { AuthService } from "./service.ts";
import { userService } from "../users/module.ts";

const authService = new AuthService(userService);
const authController = new AuthController(authService);
const authRouter = createAuthRouter(authController);

export { authRouter };
