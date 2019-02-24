module.exports = {
  showLogin: (req, res, next) => {
    res.render('user/login', { formData: {}, errors: {} })
  },
  showSignUp: (req, res, next) => {
    res.render('user/signup', { formData: {}, errors: {} })
  },
  submitLogin: (req, res, next) => {
    res.redirect('/')
  },
  submitSignUp: (req, res, next) => {
    res.redirect('/')
  }
}
