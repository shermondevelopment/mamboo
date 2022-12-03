import { Router } from 'express'

/** controllers */
import {
  NewTaskController,
  ListTaskController,
  DeleteTaskController
} from '../controllers/task-controller'

/** middlewares */
import tokenMiddleware from '../middlewares/token-middleware'
import validationMiddleware from '../middlewares/validation-middleware'

/** validation */
import taskValidation from '../validations/task-validation'

const taskRouter = Router()

taskRouter.post(
  '/task',
  tokenMiddleware,
  validationMiddleware(taskValidation),
  NewTaskController
)

taskRouter.get('/tasks', tokenMiddleware, ListTaskController)

taskRouter.delete('/task/:id', tokenMiddleware, DeleteTaskController)

export default taskRouter
