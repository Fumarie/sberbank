const Router = require('express')
const router = new Router()
const cardController = require('../controller/card.controller')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/', cardController.createCard)
router.get('/user/:id', cardController.getUserCards)
router.get('/:id', cardController.getCard)

module.exports = router