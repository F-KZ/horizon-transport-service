import dotenv from 'dotenv'
import express from 'express'
import Stripe from 'stripe'
import stripeRoutes from './src/routes/stripe/index.js'
import cors from 'cors'
import serverless from 'serverless-http'


const app = express()
dotenv.config()

// Configuration CORS
app.use(cors({
  origin: process.env.BASE_URL_LOCAL || process.env.BASE_URL_PROD || process.env.BASE_BACKEND,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 



app.get('/', (req, res) => {
  res.send('Hola !');
});

app.use('/stripe', stripeRoutes) 

const port = process.env.PORT || 3000
if (process.env.NODE_ENV === 'dev') {
  app.listen(port, () => {
    console.log(`localhost:${port}/`);
  });
}

export const handler = serverless(app)