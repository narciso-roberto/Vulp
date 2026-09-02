import { Request, Response, NextFunction } from "express";
import { UserService } from "./service.ts";
import { createUserSchema } from "../users/schemas/CreateUserSchema.ts";
import { AppError } from "../errors/Errors.ts";

export class UserController {
  constructor(private userService: UserService) {}

  getById = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (typeof id != "string") {
      throw new Error("Parametro invalido");
    }

    const user = await this.userService.getById(id);

    return res.status(200).json(user);
  };

  postUser = async (req: Request, res: Response, next: NextFunction) => {
    const isValid = createUserSchema.safeParse(req.body);

    if (!isValid.success) {
      throw new AppError(400, "Invalid body format");
    }

    try {
      const user = await this.userService.create(req.body);

      return res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  };

  putUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (typeof id != "number") {
      throw new Error("Parametro invalido");
    }

    const user = await this.userService.update(id, req.body);

    return res.status(200).json(user);
  };

  deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (typeof id != "number") {
      throw new Error("Parametro invalido");
    }

    await this.userService.delete(id);

    return res.status(204).send();
  };
}
