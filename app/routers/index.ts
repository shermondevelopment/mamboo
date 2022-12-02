import { Router } from 'express'

const routerApp = Router()

/** routers */
import authRouter from './auth-router'

routerApp.use(authRouter)

export default routerApp
