import { Router } from 'express'

const routerApp = Router()

/** routers */
import authRouter from './auth-router'
import paintingRouter from './painting-router'
import listRouter from './list-router'
import taskRouter from './task-router'

routerApp.use(authRouter)
routerApp.use(paintingRouter)
routerApp.use(listRouter)
routerApp.use(taskRouter)

export default routerApp
