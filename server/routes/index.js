const Router = require('express')
const router = new Router()

const userRouter = require('./user.routes')
const cardRouter = require('./card.routes')

router.use('/card', cardRouter)
router.use('/user', userRouter)

module.exports = router

