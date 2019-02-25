var express = require('express')
var router = express.Router()
const landingCtrl = require('../controllers/landing')
const userCtrl = require('../controllers/user')
const { isLoggedIn, isAdmin } = require('../middleware/hasAuth')

router.get('/login', userCtrl.showLogin)
router.get('/signup', userCtrl.showSignUp)
router.post('/login', userCtrl.submitLogin)
router.post('/signup', userCtrl.submitSignUp)
router.get('/logout', userCtrl.logout)
router.post('/logout', userCtrl.logout)

router.get('/', landingCtrl.showLanding)
router.post('/', landingCtrl.submitLead)
router.get('/leads', isAdmin, landingCtrl.showLeads)
router.get('/leads/:leadId', isAdmin, landingCtrl.showLead)
router.get('/leads/:leadId/edit', isAdmin, landingCtrl.showLeadEditForm)
router.post('/leads/:leadId/edit', isAdmin, landingCtrl.submitLeadEditForm)
router.post('/leads/:leadId/delete', isAdmin, landingCtrl.deleteLead)
router.post('/leads/:leadId/delete-json', isAdmin, landingCtrl.deleteLeadJSON)

module.exports = router
