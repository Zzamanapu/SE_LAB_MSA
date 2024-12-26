import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { configDotenv } from 'dotenv'
import adminRouter from './routes/adminRouter.js'


const app = express()

app.use(cors())
app.use(bodyParser.json())
configDotenv()


const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})


app.get('/apu', (req, res) => {
    res.send({name: "apu"})
})

app.use('/admin', adminRouter)
