const { validationResult } = require("express-validator")

const db = require('../db')
// const bcrypt = require('bcrypt')

class UserController {
    async getOneUser (req, res) {
        try {
            const id = req.params.id
            const user = await db.query('SELECT id_user, fio, phonenumber, email, birthdate, city, inn FROM sber_user where id_user = $1', [id])
            if(!user.rows[0]) return res.json(400).json({message: "Что-то пошло не так, возможно вы указали неверный id"})
            res.json(user.rows[0])
        } catch (e) {
            res.json(400).json({message: "Что-то пошло не так, попробуйте снова"})
        }
    }
    async updateUser (req, res) {
        try {
            const {id, fio, phonenumber, email, birthdate, city, inn} = req.body
            console.log(req.body)
            const user = await db.query('UPDATE sber_user set fio = $1, phonenumber = $2, email = $3, birthdate = $4, city = $5, inn = $6 where id_user = $7 RETURNING *', [fio, phonenumber, email, birthdate, city, inn, id])
            res.json('success')
        } catch (e) {
            res.json(400).json({message: "Что-то пошло не так, попробуйте снова"})
        }
    }
    async deleteUser (req, res) {
        try {
            const id = req.params.id
            const user = await db.query('DELETE FROM sber_user where id_user = $1', [id])
            res.json('success')
        } catch (e) {
            res.json(400).json({message: "Delete user failed"})
        }
    }
}

module.exports = new UserController()