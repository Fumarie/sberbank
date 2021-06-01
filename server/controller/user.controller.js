const db = require('../db')

class UserController {
    async createUser (req, res) {
        const {fio, phonenumber, email, birthdate, city, inn, password} = req.body
        const newUser = await db.query(`INSERT INTO sber_user (fio, phonenumber, email, birthdate, city, inn, password) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [fio, phonenumber, email, birthdate, city, inn, password])
        res.json(newUser.rows[0])
    }
    // async getUsers (req, res) {
    //     const users = await db.query('SELECT * FROM sber_user')
    //     res.json(users.rows)
    // }
    async getOneUser (req, res) {
        //GETTING PASSWORD
        const id = req.params.id
        const user = await db.query('SELECT * FROM sber_user where id_user = $1', [id])
        res.json(user.rows[0])
    }
    async updateUser (req, res) {
        const {id, fio, phonenumber, email, birthdate, city, inn, password} = req.body
        const user = await db.query('UPDATE sber_user set fio = $1, phonenumber = $2, email = $3, birthdate = $4, city = $5, inn = $6, password = $7 where id_user = $8 RETURNING *', [fio, phonenumber, email, birthdate, city, inn, password, id])
        res.json(user.rows[0])
    }
    // async deleteUser (req, res) {
    //     const id = req.params.id
    //     const user = await db.query('DELETE FROM sber_user where id_user = $1', [id])
    //     res.json(user.rows[0])
    // }
}

module.exports = new UserController()