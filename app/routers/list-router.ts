import { Router } from 'express'

/** controllers */
import { CreateListController } from '../controllers/list-controller'

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

export default listRouter
