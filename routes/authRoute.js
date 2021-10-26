//import
const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.get('/login', authController.loggin)
router.get('/callback', authController.callback)
router.get('/refresh_token', authController.refresh_token)

module.exports = router