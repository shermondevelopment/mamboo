import * as Joi from 'joi'

const listValidation = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': 'please enter a title'
  }),
  painting_id: Joi.string().uuid().messages({
    'string.empty': 'please inform the board to which this list belongs',
    'string.guid': 'enter a valid uuid'
  })
})

export default listValidation
