import { Request, Response } from 'express'

/** tasks */
import {
  NewTaskService,
  FindTaskService,
  DeleteTaskService,
  UpdateTaskService
} from '../services/task-service'

export const NewTaskController = async (req: Request, res: Response) => {
  const { id: user_id } = res.locals.user
  const { content, list_id } = req.body

  await NewTaskService(content, user_id, list_id)
  res.sendStatus(201)
}

export const ListTaskController = async (req: Request, res: Response) => {
  const tasks = await FindTaskService()
  res.status(200).json(tasks)
}

export const DeleteTaskController = async (req: Request, res: Response) => {
  const { id: task_id } = req.params
  await DeleteTaskService(task_id)
  res.sendStatus(204)
}

export const UpdateTaskController = async (req: Request, res: Response) => {
  const { id: task_id } = req.params
  const { content, position_task } = req.body
  await UpdateTaskService({ content, position_task }, task_id)
  res.sendStatus(200)
}
