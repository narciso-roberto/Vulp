import { Request, Response } from "express";

class UserController {
  constructor() {}
  getById = async (req: Request, res: Response) => {};
  postProduct = async (req: Request, res: Response) => {};
  putProduct = async (req: Request, res: Response) => {};
  deleteProduct = async (req: Request, res: Response) => {};
}

const userController = new UserController();

export { userController };
