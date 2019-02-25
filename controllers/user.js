const models = require('../models')
const passport = require('passport')
const bcrypt = require('bcrypt')
const myPassport = require('../passport_setup')(passport)
const flash = require('connect-flash')
const validateUser = require('../validators/signup')
const { isEmpty } = require('lodash')

const generateHash = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

const rerenderSignUp = (errors, req, res, next) => {
  res.render('user/signup', {
    formData: req.body,
    errors: errors
  })
}

module.exports = {
  showLogin: (req, res, next) => {
    res.render('user/login', {
      formData: {},
      errors: { message: req.flash('message') }
    })
  },
  showSignUp: (req, res, next) => {
    res.render('user/signup', {
      formData: {},
      errors: {}
    })
  },
  submitSignUp: (req, res, next) => {
    let errors = {}
    return validateUser(errors, req).then(errors => {
      if (!isEmpty(errors)) {
        rerenderSignUp(errors, req, res, next)
      } else {
        return models.User.findOne({
          where: {
            isAdmin: true
          }
        }).then(user => {
          let newUser
          if (user !== null) {
            newUser = models.User.build({
              email: req.body.email,
              password: generateHash(req.body.password)
            })
          } else {
            newUser = models.User.build({
              email: req.body.email,
              password: generateHash(req.body.password),
              isAdmin: true
            })
          }
          return newUser.save().then(result => {
            passport.authenticate('local', {
              successRedirect: '/',
              failureRedirect: '/signup',
              failureFlash: true
            })(req, res, next)
          })
        })
      }
    })
  },
  submitLogin: (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true
    })(req, res, next)
  },
  logout: (req, res, next) => {
    req.logout()
    req.session.destroy()
    res.redirect('/')
  }
}
