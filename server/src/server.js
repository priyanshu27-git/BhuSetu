import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.status(200).json({ status: 'ok', service: 'bhusetu-api' })
})

app.listen(port, () => {
  console.log(`BhuSetu API listening on port ${port}`)
})
