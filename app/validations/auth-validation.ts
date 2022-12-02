import * as Joi from 'joi'

const signupValidation = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'please enter a email',
    'string.email': 'please enter a valid email'
  }),
  password: Joi.string().required().messages({
    'string.empty': 'please enter a password'
  })
})

export default signupValidation
