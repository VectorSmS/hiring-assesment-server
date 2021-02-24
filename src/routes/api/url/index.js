const express = require('express')
const router = express.Router()

router.post('/shorten', require('./shortenUrl'))

module.exports = router
