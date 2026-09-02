import { Request, Response } from "express";

const authService: any = 0

class AuthController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const result = await authService.login(email, password);

    return res.status(200).json(result);
  }

  async register(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await authService.register(email, password);

    return res.status(201).json(user);
  }
}

const authController = new AuthController();

export { authController };
