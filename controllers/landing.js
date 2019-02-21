const models = require('../models')
module.exports = {
  getLanding: (req, res) => {
    res.render('landing', { title: 'Landing' })
  },
  submitLead: (req, res) => {
    models.Lead.create({
      email: req.body.lead_email
    })
      .then(response => {
        console.log(response.dataValues)
        res.redirect('/')
      })
      .catch(error => {
        if (error) {
          console.log(error)
        }
      })
  }
}
