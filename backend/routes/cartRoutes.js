import express from 'express';
import { getCart, addToCart, removeFromCart } from '../controllers/cartController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);
router.get('/', getCart);
router.post('/add', addToCart);
router.delete('/remove/:courseId', removeFromCart);

export default router;