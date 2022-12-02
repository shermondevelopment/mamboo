import { Router } from 'express'

/** controllers */
import SignupController from '../controllers/signup-controller'
import SigninController from '../controllers/signin-controller'

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

authRouter.post(
  '/signin',
  validationMiddleware(signupValidation),
  SigninController
)

export default authRouter
