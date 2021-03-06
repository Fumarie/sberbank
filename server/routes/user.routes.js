const { check } = require("express-validator")
const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')
const authMiddleware = require('../middlewares/authMiddleware')


router.get('/:id', userController.getOneUser)
router.put('/', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router