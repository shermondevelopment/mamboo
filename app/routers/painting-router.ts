import { Router } from 'express'

/** controllers */
import {
  CreatePaintingController,
  ListAllPaintingController,
  UpdatePaintingController
} from '../controllers/painting-controller'

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

paintingRouter.get('/paintings', tokenMiddleware, ListAllPaintingController)

paintingRouter.put(
  '/painting/:id',
  tokenMiddleware,
  validationMiddleware(paintingValidation),
  UpdatePaintingController
)

export default paintingRouter
