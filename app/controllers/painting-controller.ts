import { Request, Response } from 'express'

/** services */
import {
  ListAllPaintingService,
  CreatePaintingService
} from '../services/painting-service'

export const CreatePaintingController = async (req: Request, res: Response) => {
  const { id: user_id } = res.locals.user
  const { title } = req.body

  await CreatePaintingService({ title, user_id })

  res.sendStatus(201)
}

export const ListAllPaintingController = async (
  req: Request,
  res: Response
) => {
  const { id: user_id } = res.locals.user

  const painting = await ListAllPaintingService(user_id)

  res.status(200).json(painting)
}
