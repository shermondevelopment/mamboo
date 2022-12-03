import { Router } from 'express'

/** controllers */
import {
  CreatePaintingController,
  ListAllPaintingController,
  UpdatePaintingController,
  DeletePaintingController,
  ListSinglePaintingController
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

paintingRouter.get(
  '/painting/:id',
  tokenMiddleware,
  ListSinglePaintingController
)

paintingRouter.put(
  '/painting/:id',
  tokenMiddleware,
  validationMiddleware(paintingValidation),
  UpdatePaintingController
)

paintingRouter.delete(
  '/painting/:id',
  tokenMiddleware,
  DeletePaintingController
)

export default paintingRouter
