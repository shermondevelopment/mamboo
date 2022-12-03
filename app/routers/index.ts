import { Router } from 'express'

const routerApp = Router()

/** routers */
import authRouter from './auth-router'
import paintingRouter from './painting-router'

routerApp.use(authRouter)
routerApp.use(paintingRouter)

export default routerApp
