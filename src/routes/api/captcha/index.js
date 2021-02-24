const express = require('express')
const router = express.Router()

router.get('/', require('./generateCaptcha'))

module.exports = router
