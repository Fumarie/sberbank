const { validationResult } = require("express-validator")

const db = require('../db')
const bcrypt = require('bcrypt')

class UserController {
    async getOneUser (req, res) {
        try {
            const id = req.params.id
            const user = await db.query('SELECT id_user, fio, phonenumber, email, birthdate, city, inn FROM sber_user where id_user = $1', [id])
            if(!user.rows[0]) return res.json(400).json({message: "Что-то пошло не так, возможно вы указали неверный id"})
            res.json(user.rows[0])
        } catch (e) {
            res.json(400).json({message: "Что-то пошло не так, возможно вы указали неверный id"})
        }
    }
    async updateUser (req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message: "Ошибка при обновлении", ...errors})
            }
            const {id, fio, phonenumber, email, birthdate, city, inn, password} = req.body
            const hashPassword = bcrypt.hashSync(password, 5)
            const user = await db.query('UPDATE sber_user set fio = $1, phonenumber = $2, email = $3, birthdate = $4, city = $5, inn = $6, password = $7 where id_user = $8 RETURNING *', [fio, phonenumber, email, birthdate, city, inn, hashPassword, id])
            res.json('Success')
        } catch (e) {
            res.json(400).json({message: "Что-то пошло не так, возможно вы указали неверный id"})
        }
    }
    // async deleteUser (req, res) {
    //     const id = req.params.id
    //     const user = await db.query('DELETE FROM sber_user where id_user = $1', [id])
    //     res.json(user.rows[0])
    // }
}

module.exports = new UserController()