const validator = require('validator')
const models = require('../models')

const validateCreateUserFields = (errors, req) => {
  if (!validator.isEmail(req.body.email)) {
    errors['email'] = 'Please use a valid email'
  }
  if (!validator.isAscii(req.body.password)) {
    errors['password'] =
      'Invalid characters in password, please try another one'
  }
  if (!validator.isLength(req.body.password, { min: 8, max: 25 })) {
    errors['password'] =
      'Please ensure your password has a minimum of 8 characters'
  }
}

const validateUser = (errors, req) => {
  return new Promise((resolve, reject) => {
    validateCreateUserFields(errors, req)
    return models.User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user !== null) {
        errors['email'] =
          'This email is already in use. Try logging in or resetting your password'
      }
      resolve(errors)
    })
  })
}

module.exports = validateUser
