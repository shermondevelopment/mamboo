import { Request, Response } from 'express'

/** services */
import { CreateListService } from '../services/list-service'

/** create a new list */

export const CreateListController = async (req: Request, res: Response) => {
  const { id: user_id } = res.locals.user
  const { title, painting_id } = req.body

  await CreateListService(title, painting_id, user_id)

  res.sendStatus(201)
}
