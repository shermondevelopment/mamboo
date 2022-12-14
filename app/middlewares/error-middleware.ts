/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express'

interface ErrorResponse {
  statusCode: number
  message: string
}

export default (
  error: ErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res
    .status(error.statusCode || 500)
    .json({ error: error.message || 'internal server error' })
}
