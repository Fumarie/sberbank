const { check } = require("express-validator")
const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')
const authMiddleware = require('../middlewares/authMiddleware')

// router.post('/', userController.createUser)
// router.get('/user', userController.getUsers)
router.get('/:id', userController.getOneUser)
router.put('/',
        [
            check('email', 'Введите корректный email').isEmail(),
            check('fio', 'Поле ФИО не должно быть пустым').notEmpty(),
            check('birthdate', 'Поле дата не должно быть пустым').notEmpty(),
            check('city', 'Поле город не должно быть пустым').notEmpty(),
            check('inn', 'Поле ИНН не должно быть пустым').notEmpty(),
            check('password', "Пароль должен быть больше 4 и меньше 15").isLength({min: 4, max: 15}),
            check('phonenumber', "Номер должен состоять из 11 цифр").isLength({min: 11, max: 11}),
        ],
    userController.updateUser)
// router.delete('/user/:id', userController.deleteUser)

module.exports = router