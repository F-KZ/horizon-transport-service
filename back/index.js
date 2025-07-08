import dotenv from 'dotenv'
import express from 'express'
import Stripe from 'stripe'
import stripeRoutes from './src/routes/stripe/index.js'
import paypalRoutes from './src/routes/paypal/index.js'
import cors from 'cors'
import serverless from 'serverless-http'


const app = express()
dotenv.config()

// Configuration CORS
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://www.horizontransports.fr',
    'https://horizontransports.fr'
  ],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}))

// Configuration CSP pour PayPal
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    [
      "script-src 'unsafe-inline' https://*.paypal.com https://*.paypalobjects.com",
      "style-src 'unsafe-inline' https://*.paypal.com",
      "connect-src https://*.paypal.com",
      "frame-src https://*.paypal.com",
      "img-src https://*.paypal.com https://*.paypalobjects.com"
    ].join('; ')
  );
  next();
});

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 



app.get('/', (req, res) => {
  res.send('Hola !');
});

app.use('/stripe', stripeRoutes) 
app.use('/paypal', paypalRoutes) 

const port = process.env.PORT || 3000

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });


export const handler = serverless(app)