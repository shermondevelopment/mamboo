import { Request, Response } from 'express'

/** services */
import {
  ListAllPaintingService,
  CreatePaintingService,
  UpdatePaintingService,
  DeletePaintingService,
  ListSinglePaintingService
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

export const UpdatePaintingController = async (req: Request, res: Response) => {
  const { id: user_id } = res.locals.user
  const { id: painting_id } = req.params
  const { title } = req.body

  await UpdatePaintingService({ user_id, painting_id, title })

  res.sendStatus(200)
}

export const DeletePaintingController = async (req: Request, res: Response) => {
  const { id: user_id } = res.locals.user
  const { id: painting_id } = req.params
  await DeletePaintingService(painting_id, user_id)

  res.sendStatus(204)
}

export const ListSinglePaintingController = async (
  req: Request,
  res: Response
) => {
  const { id: user_id } = res.locals.user
  const { id: painting_id } = req.params

  const painting = await ListSinglePaintingService(painting_id, user_id)

  res.status(200).json(painting)
}
