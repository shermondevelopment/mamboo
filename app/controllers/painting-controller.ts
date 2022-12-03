import { Request, Response } from 'express'

/** services */
import CreatePaintingService from '../services/painting-service'

const CreatePaintingController = async (req: Request, res: Response) => {
  const { id: user_id } = res.locals.user
  const { title } = req.body

  await CreatePaintingService({ title, user_id })

  res.sendStatus(201)
}

export default CreatePaintingController
