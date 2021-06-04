const db = require('../db')

class CardController {
    async createCard (req, res) {
        try {
            const {user_id, cvv, balance, validthru, type, name} = req.body
            const newCard = await db.query('INSERT INTO card (user_id, cvv, balance, validThru, type, name) values ($1, $2, $3, $4, $5, $6) RETURNING id', [user_id, cvv, balance, validthru, type, name])
            res.json(newCard.rows[0].id)
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Card creation error'})
        }
    }
    async getUserCards (req, res) {
        //SECURITY!!!!!
        try {
            const id = req.params.id
            const user = await db.query('SELECT * FROM card where user_id = $1', [id])
            res.json(user.rows)
        }catch (e) {
            console.log(e)
            res.status(400).json({message: 'Card update error'})
        }
    }
    async getCard (req, res) {
        //SECURITY!!!!!
        try {
            const id = req.params.id
            const user = await db.query('SELECT * FROM card where id = $1', [id])
            res.json(user.rows[0])
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Card getting error'})
        }
    }
    async updateCard (req, res) {
        try {
            const {id, name, cvv} = req.body
            const card = await db.query('UPDATE card set name = $2, cvv = $3 where id = $1', [id, name, cvv])
            res.json('success')
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Card updating error'})
        }
    }
    async deleteCard (req, res) {
        try {
            const id = req.params.id
            const user = await db.query('DELETE FROM card where id = $1', [id])
            res.json(user.rows[0])
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Card deleting error'})
        }
    }
}

module.exports = new CardController()