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
    return models.Lead.findAll()
      .then(leads => {
        res.render('landing', { title: 'Leads', leads: leads })
      })
      .catch(error => {
        if (error) {
          console.log(error)
        }
      })
  },
  getLead: (req, res) => {
    return models.Lead.findOne({
      where: {
        id: req.params.leadId
      }
    })
      .then(lead => {
        res.render('lead', { lead: lead })
      })
      .catch(err => {
        if (err) {
          console.log(err)
        }
      })
  }
}
