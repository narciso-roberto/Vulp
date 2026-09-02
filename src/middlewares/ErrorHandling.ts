import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/Errors.ts";

export const errorHandling = (
  erre: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (erre instanceof AppError) {
    return res.status(erre.status).json({
      message: erre.message,
      details: erre.details
    });
  } else {
    return res.status(500).json("Something went wrong!!");
  }
};
