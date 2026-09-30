import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/Errors.ts";
import jwt from "jsonwebtoken";

// COMO PROTEGER ROTAS NO EXPRESS ?
// COMO VERIFICAR SE UM TOKEN EH VALIDO ?
// QUAL A NECESSIDADE DE USA UM PASSPORT ?

export const AuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return next(new AppError(401, "Authorization header missing"));
  }

  const [type, token] = authHeader.split(" ");
  
  if (type !== "Bearer" || !token) {
    return next(new AppError(401, "Invalid authorization format"));
  }

  if (!process.env.JWT_SECRET) {
    return next(new AppError(500, "JWT secret is not configured"));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return next(new AppError(401, "Expired token"));
    }

    if (error instanceof jwt.JsonWebTokenError) {
      return next(new AppError(401, "Invalid token format"));
    }

    return next(new AppError(401, "Something went wrong with the token"));
  }
};
