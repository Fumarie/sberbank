const Router = require('express')
const router = new Router()
const authController = require('../controller/auth.controller')
const {check} = require("express-validator")

router.post('/registration',
    [
        check('email', 'Введите корректный email').isEmail(),
        check('fio', 'Поле ФИО не должно быть пустым').notEmpty(),
        check('birthdate', 'Поле дата не должно быть пустым').notEmpty(),
        check('city', 'Поле город не должно быть пустым').notEmpty(),
        check('inn', 'Поле ИНН не должно быть пустым').notEmpty(),
        check('password', "Пароль должен быть больше 4 и меньше 15").isLength({min: 4, max: 15}),
        check('phonenumber', "Номер должен состоять из 11 цифр").isLength({min: 11, max: 11}),
    ],
authController.registration)

router.post('/login',
    [
        check('email', 'Введите корректный email').isEmail(),
        check('password', "Пароль должен быть больше 4 и меньше 15").isLength({min: 4, max: 15}),
    ],
    authController.login)

module.exports = router