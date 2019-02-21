var express = require('express')
var router = express.Router()
const landingCtrl = require('../controllers/landing')

/* GET home page. */
router.get('/', landingCtrl.getLanding)
router.post('/', landingCtrl.submitLead)
router.get('/leads', landingCtrl.getLeads)
router.get('/lead/:leadId', landingCtrl.getLead)

module.exports = router
