const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')

router.post('/', userController.createUser)
// router.get('/user', userController.getUsers)
router.get('/:id', userController.getOneUser)
router.put('/', userController.updateUser)
// router.delete('/user/:id', userController.deleteUser)

module.exports = router