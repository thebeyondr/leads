var express = require('express')
var router = express.Router()
const landingCtrl = require('../controllers/landing')

/* GET home page. */
router.get('/', landingCtrl.showLanding)
router.post('/', landingCtrl.submitLead)
router.get('/leads', landingCtrl.showLeads)
router.get('/leads/:leadId', landingCtrl.showLead)
router.get('/leads/:leadId/edit', landingCtrl.showLeadEditForm)
router.post('/leads/:leadId/edit', landingCtrl.submitLeadEditForm)

module.exports = router
