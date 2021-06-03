const Router = require('express')
const router = new Router()

const userRouter = require('./user.routes')
const cardRouter = require('./card.routes')
const authRouter = require('./auth.routes')

router.use('/card', cardRouter)
router.use('/user', userRouter)
router.use('/auth', authRouter)

module.exports = router

