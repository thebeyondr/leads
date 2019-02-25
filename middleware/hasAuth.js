const createError = require('http-errors')

exports.isLoggedIn = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    next(createError(404, 'This page does not exist!'))
  }
}
exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin === true) {
    next()
  } else {
    next(createError(404, 'This page does not exist!'))
  }
}
