import express from 'express';
import { getAllProducts, getProductById } from '../controllers/productController.js';

const router = express.Router();

// Endpoint: GET semua produk
router.get('/', getAllProducts);

// Endpoint: GET produk berdasarkan ID
router.get('/:id', getProductById);

export default router;
