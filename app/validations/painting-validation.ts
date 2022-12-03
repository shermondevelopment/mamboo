import * as Joi from 'joi'

const paintingValidation = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': 'please enter a title'
  })
})

export default paintingValidation
