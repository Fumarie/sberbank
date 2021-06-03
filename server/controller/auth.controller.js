const db = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require("express-validator")
const {secret} = require('../config')

const generateAccessToken = (id) => {
    const payload = {id}
    return jwt.sign(payload, secret, {expiresIn: '1h'})
}

class AuthController {
    async registration (req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message: "Ошибка при регистрации", ...errors})
            }
            const {fio, phonenumber, email, birthdate, city, inn, password} = req.body
            console.log(fio, phonenumber, email, birthdate, city, inn, password)
            const candidate = await db.query('SELECT * FROM sber_user where email = $1', [email])
            if(candidate.rows[0])
                return res.status(400).json({message: "Пользователь с таким email уже существует"})
            const hashPassword = bcrypt.hashSync(password, 5)
            const newUser = await db.query(`INSERT INTO sber_user (fio, phonenumber, email, birthdate, city, inn, password) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [fio, phonenumber, email, birthdate, city, inn, hashPassword])
            if(newUser) {
                console.log(newUser.rows[0].id_user)
                const token = generateAccessToken(newUser.rows[0].id_user)
                res.json({token, id: newUser.rows[0].id_user})
            }
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Registration error'})
        }
    }

    async login (req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message: "Ошибка при регистрации", ...errors})
            }
            const {email, password} = req.body
            console.log(email, password)

            const candidate = await db.query('SELECT * FROM sber_user where email = $1', [email])
            console.log('Candidate', candidate.rows[0])

            if(!candidate.rows[0] || !candidate.rows[0].password) return res.status(400).json({message: 'Неверный логин или пароль'}) //><?
            const validPassword = bcrypt.compareSync(password, candidate.rows[0].password)
            if(validPassword) {
                const token = generateAccessToken(candidate.rows[0].id_user)
                res.json({token, id: candidate.rows[0].id_user})
            } else {
                res.status(400).json({message: 'Login error'})
            }
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Login error'})
        }
    }
}

module.exports = new AuthController()