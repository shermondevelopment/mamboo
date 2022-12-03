import { Router } from 'express'

/** controllers */
import CreatePaintingController from '../controllers/painting-controller'

/** middlewares */
import tokenMiddleware from '../middlewares/token-middleware'
import validationMiddleware from '../middlewares/validation-middleware'

/** validation */
import paintingValidation from '../validations/painting-validation'

/** middleware */

const paintingRouter = Router()

paintingRouter.post(
  '/painting/create',
  tokenMiddleware,
  validationMiddleware(paintingValidation),
  CreatePaintingController
)

export default paintingRouter
