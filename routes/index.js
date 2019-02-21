var express = require('express')
var router = express.Router()
const indexController = require('../controllers/landing')

/* GET home page. */
router.get('/', indexController.getLanding)

module.exports = router
