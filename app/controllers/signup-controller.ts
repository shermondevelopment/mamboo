import { Request, Response } from 'express'

/** services */
import SignupService from '../services/signup-service'

const SignupController = async (req: Request, res: Response) => {
  const { email, password } = req.body

  await SignupService({ email, password })

  res.sendStatus(201)
}

export default SignupController
