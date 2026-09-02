import { Request, Response } from "express";
import { UserService } from "./service.ts";

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

  postUser = async (req: Request, res: Response) => {
    const user = await this.userService.create(req.body);

    return res.status(201).json(user);
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
