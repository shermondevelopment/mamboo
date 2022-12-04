import * as Joi from 'joi'

export const taskValidation = Joi.object({
  content: Joi.string().required().messages({
    'string.empty': 'please enter a content'
  }),
  list_id: Joi.string().uuid().required().messages({
    'any.required': 'please inform the list to which the task belongs',
    'string.empty': 'please inform the list to which the task belongs',
    'string.guid': 'enter a valid uuid'
  }),
  position_task: Joi.number(),
  members: Joi.array().items(
    Joi.object({
      email: Joi.string().email()
    })
  )
})

export const taskAddMembersValidation = Joi.object({
  members: Joi.array().items(
    Joi.object({
      email: Joi.string().email()
    })
  )
})
