module.exports = {
  getLanding: (req, res) => {
    res.render('landing', { title: 'Landing' })
  },
  submitLead: (req, res) => {
    console.log('Lead email:', req.body.lead_email)
    res.redirect('/')
  }
}
