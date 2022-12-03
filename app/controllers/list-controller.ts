import { Request, Response } from 'express'

/** services */
import {
  CreateListService,
  GetAllListByPaintingService
} from '../services/list-service'

/** create a new list */

export const CreateListController = async (req: Request, res: Response) => {
  const { id: user_id } = res.locals.user
  const { title, painting_id } = req.body

  await CreateListService(title, painting_id, user_id)

  res.sendStatus(201)
}

export const GetAllListByPaintingController = async (
  req: Request,
  res: Response
) => {
  const { id: user_id } = res.locals.user

  const { id: painting_id } = req.params

  const painting = await GetAllListByPaintingService(painting_id, user_id)

  res.status(200).json(painting)
}
