import { Router } from 'express'
import { stripeCheckout, stripeComplete, stripeCancel } from './stripeController.js'

const router = Router()

router.post('/checkout', stripeCheckout)
router.get('/complete', stripeComplete)
router.get('/cancel', stripeCancel)

export default router