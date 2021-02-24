const express = require('express')
const router = express.Router()

router.get('/', require('./getMockUsers'))

module.exports = router
