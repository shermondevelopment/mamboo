import { Router } from 'express'

/** controllers */
import SignupController from '../controllers/signup-controller'

/** middleware */
import validationMiddleware from '../middlewares/validation-middleware'

/** validation */
import signupValidation from '../validations/auth-validation'

/** schema validation */

const authRouter = Router()

authRouter.post(
  '/signup',
  validationMiddleware(signupValidation),
  SignupController
)

export default authRouter
