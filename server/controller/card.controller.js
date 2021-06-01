const db = require('../db')

class CardController {
    async createCard (req, res) {
        const {user_id, cvv, balance, validThru, type, name} = req.body
        const newCard = db.query('INSERT INTO card (user_id, cvv, balance, validThru, type, name) values ($1, $2, $3, $4, $5, $6) RETURNING *', [user_id, cvv, balance, validThru, type, name])
        res.json(newCard)
    }
    async getUserCards (req, res) {
        //SECURITY!!!!!
        const id = req.params.id
        const user = await db.query('SELECT * FROM card where user_id = $1', [id])
        res.json(user.rows)
    }
    async getCard (req, res) {
        //SECURITY!!!!!
        const id = req.params.id
        const user = await db.query('SELECT * FROM card where id = $1', [id])
        res.json(user.rows[0])
    }
}

module.exports = new CardController()