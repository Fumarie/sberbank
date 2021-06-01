const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
// const userRouter = require('./routes/user.routes')
// const cardRouter = require('./routes/card.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(PORT, () => console.log(`server is working on port ${PORT}`))