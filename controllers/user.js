module.exports = {
  showLogin: (req, res) => {
    res.render('user/login', { formData: {}, errors: {} })
  },
  showSignUp: (req, res) => {
    res.render('user/signup', { formData: {}, errors: {} })
  },
  submitLogin: (req, res) => {
    res.redirect('/')
  },
  submitSignUp: (req, res) => {
    res.redirect('/')
  }
}
