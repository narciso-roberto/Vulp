import { Request, Response } from "express";

class ProductController {
  constructor() {}
  getById = async (req: Request, res: Response) => {
    const params = req.params;

    res.send(params);
  };
}

const controller = new ProductController();

export { controller };
