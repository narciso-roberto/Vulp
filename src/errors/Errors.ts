export class AppError {
  status: number;
  message: string;
  details?: any;

  constructor(status: number, message: string, details?: any) {
    this.status = status;
    this.message = message;
    this.details = details;
  }
}

export class NotFoundError extends AppError {
  constructor(message = "Resource not found") {
    super(404, message);
  }
}

export class BadRequestError extends AppError {
  constructor(message = "Bad request") {
    super(400, message);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized") {
    super(401, message);
  }
}
