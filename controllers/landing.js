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
        res.redirect('/leads')
      })
      .catch(error => {
        if (error) {
          console.log(error)
        }
      })
  },
  getLeads: (req, res) => {
    models.Lead.findAll()
      .then(leads => {
        res.render('landing', { leads: leads })
      })
      .catch(error => {
        if (error) {
          console.log(error)
        }
      })
  }
}
