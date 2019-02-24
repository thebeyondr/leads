var express = require('express')
var router = express.Router()
const landingCtrl = require('../controllers/landing')
const userCtrl = require('../controllers/user')

router.get('/login', userCtrl.showLogin)
router.get('/signup', userCtrl.showSignUp)
router.post('/login', userCtrl.submitLogin)
router.post('/signup', userCtrl.submitSignUp)

router.get('/', landingCtrl.showLanding)
router.post('/', landingCtrl.submitLead)
router.get('/leads', landingCtrl.showLeads)
router.get('/leads/:leadId', landingCtrl.showLead)
router.get('/leads/:leadId/edit', landingCtrl.showLeadEditForm)
router.post('/leads/:leadId/edit', landingCtrl.submitLeadEditForm)
router.post('/leads/:leadId/delete', landingCtrl.deleteLead)
router.post('/leads/:leadId/delete-json', landingCtrl.deleteLeadJSON)

module.exports = router
