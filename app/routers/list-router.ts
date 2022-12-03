import { Router } from 'express'

/** controllers */
import {
  CreateListController,
  GetAllListByPaintingController,
  UpdateListController
} from '../controllers/list-controller'

/** middleware */
import tokenMiddleware from '../middlewares/token-middleware'
import validationMiddleware from '../middlewares/validation-middleware'

/** validation */
import listValidation from '../validations/list-validation'

const listRouter = Router()

listRouter.post(
  '/list',
  tokenMiddleware,
  validationMiddleware(listValidation),
  CreateListController
)

listRouter.get(
  '/list/by/painting/:id',
  tokenMiddleware,
  GetAllListByPaintingController
)

listRouter.put('/list/:id', tokenMiddleware, UpdateListController)

export default listRouter
