import { Router } from 'express'
import { createPayPalOrder, capturePayPalOrder, getPayPalOrder } from './paypalController.js'

const router = Router()

router.post('/create-order', createPayPalOrder)
router.post('/capture-order', capturePayPalOrder)
router.get('/order/:orderId', getPayPalOrder)

export default router 