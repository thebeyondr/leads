module.exports = {
  showLogin: (req, res) => {
    res.render('user/login', { formData: {}, errors: {} })
  },
  showSignUp: (req, res) => {
    res.render('user/signup', { formData: {}, errors: {} })
  }
}
