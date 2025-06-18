import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/appError';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const isKnownError = err instanceof AppError;
  const status = isKnownError ? err.statusCode : 500;
  const message = isKnownError ? err.message : 'Internal Server Error';

  if (!isKnownError) {
    console.error('Unexpected Error:', err); // Log full error stack in dev/monitoring
  }

  res.status(status).json({
    success: false,
    error: {
      message,
      status,
    },
  });
};