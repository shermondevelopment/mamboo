import { Request, Response } from 'express'

/** tasks */
import { NewTaskService } from '../services/task-service'

export const NewTaskController = async (req: Request, res: Response) => {
  const { id: user_id } = res.locals.user
  const { content, list_id } = req.body

  await NewTaskService(content, user_id, list_id)
  res.sendStatus(201)
}
