import { Router } from 'express'

/** controllers */
import SignupController from '../controllers/signup-controller'

const authRouter = Router()

authRouter.post('/signup', SignupController)

export default authRouter
