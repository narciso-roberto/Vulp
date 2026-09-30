import { Request, Response } from "express";
import { RegisterUserSchema } from "./schemas/RegisterUserSchemas.ts";
import { LoginUserSchema } from "./schemas/LoginUserDTO.ts";
import { AppError } from "../errors/Errors.ts";
import { AuthService } from "./service.ts";

export class AuthController {
  constructor(private authService: AuthService) {}
  login = async (req: Request, res: Response) => {
    const isValid = LoginUserSchema.safeParse(req.body);

    if (!isValid.success) {
      throw new AppError(400, "Invalid body format");
    }

    const result = await this.authService.login(isValid.data);

    return res.status(200).json(result);
  };

  register = async (req: Request, res: Response) => {
    const isValid = RegisterUserSchema.safeParse(req.body);

    if (!isValid.success) {
      throw new AppError(400, "Invalid body format");
    }

    const user = await this.authService.register(isValid.data);

    return res.status(201).json(user);
  };
}
