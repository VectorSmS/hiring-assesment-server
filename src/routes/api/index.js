const express = require('express')
const router = express.Router()

router.use('/url', require('./url'))
router.use('/captcha', require('./captcha'))
router.use('/mock', require('./mock'))
router.use('/temp', require('./temperature'))
module.exports = router
