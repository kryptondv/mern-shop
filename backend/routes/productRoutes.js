import express from 'express';
import { getProducts, getProductById } from '../controllers/productController.js';

const router = express.Router();

/*
Fetch all products
GET /api/products
*/
router.route('/').get(getProducts);

/*
Fetch single product
GET /api/products/:id
*/
router.route('/:id').get(getProductById);

export default router;
