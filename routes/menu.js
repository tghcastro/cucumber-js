const express = require('express')
const router = express.Router()

const menuService = require('../services/menu.service')

router.get('/', menuService.getMenu)
router.post('/', menuService.createMenuItem)

module.exports = router