import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

// @Desc Fetch all Products
// @Route GET/api/products
// @access Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})

  res.json(products)
})

// @Desc Fetch single Product
// @Route GET/api/products/:id
// @access Public

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export { getProducts, getProductById }