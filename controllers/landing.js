const models = require('../models')
module.exports = {
  showLanding: (req, res) => {
    res.render('landing')
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
  showLeads: (req, res) => {
    return models.Lead.findAll()
      .then(leads => {
        res.render('lead/leads', { leads: leads })
      })
      .catch(error => {
        if (error) {
          console.log(error)
        }
      })
  },
  showLead: (req, res) => {
    return models.Lead.findOne({
      where: {
        id: req.params.leadId
      }
    })
      .then(lead => {
        res.render('lead/lead', { lead: lead })
      })
      .catch(err => {
        if (err) {
          console.log(err)
        }
      })
  },
  showLeadEditForm: (req, res) => {
    return models.Lead.findOne({
      where: {
        id: req.params.leadId
      }
    })
      .then(lead => {
        res.render('lead/edit-lead', { lead: lead })
      })
      .catch(err => {
        if (err) {
          console.log(err)
        }
      })
  },
  submitLeadEditForm: (req, res) => {
    return models.Lead.update(
      {
        email: req.body.lead_email
      },
      {
        where: {
          id: req.params.leadId
        }
      }
    )
      .then(result => {
        res.redirect(`/leads/${req.params.leadId}`)
      })
      .catch(error => {
        console.log(error)
      })
  },
  deleteLead: (req, res) => {
    return models.Lead.destroy({
      where: {
        id: req.params.leadId
      }
    })
      .then(result => {
        res.redirect(`/leads`)
      })
      .catch(error => {
        console.log(error)
      })
  },
  deleteLeadJSON: (req, res) => {
    return models.Lead.destroy({
      where: {
        id: req.params.leadId
      }
    })
      .then(result => {
        res.send({ msg: 'Success' })
      })
      .catch(error => {
        console.log(error)
      })
  }
}
