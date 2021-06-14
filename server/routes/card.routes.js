const Router = require('express')
const router = new Router()
const cardController = require('../controller/card.controller')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/', cardController.createCard)
router.get('/user/:id', cardController.getUserCards)
router.get('/:id', cardController.getCard)
router.get('/get/fullSum', cardController.getUsersSum)
router.get('/getUserSum/:id', cardController.getUserSum)
router.delete('/:id', cardController.deleteCard)
router.put('/', cardController.updateCard)

module.exports = router