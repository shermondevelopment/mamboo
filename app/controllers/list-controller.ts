import { Request, Response } from 'express'

/** services */
import {
  CreateListService,
  GetAllListByPaintingService,
  UpdateListService,
  DeleteListService,
  GetAllListHowTaskService
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

export const UpdateListController = async (req: Request, res: Response) => {
  const { id: list_id } = req.params
  const { title } = req.body

  await UpdateListService(list_id, title)

  res.sendStatus(201)
}

export const DeleteListController = async (req: Request, res: Response) => {
  const { id: list_id } = req.params

  await DeleteListService(list_id)
  res.sendStatus(204)
}

export const GetAllListHowTask = async (req: Request, res: Response) => {
  const { id: user_id } = res.locals.user
  const { id: painting_id } = req.params
  const list = await GetAllListHowTaskService(user_id, painting_id)
  res.status(200).json(list)
}
