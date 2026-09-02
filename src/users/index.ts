import { UserRepository } from "./repository.ts";
import { UserService } from "./service.ts";
import { UserController } from "./controller.ts";
import { createUserRouter } from "./router.ts";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);
const userRouter = createUserRouter(userController);

export {userRouter}