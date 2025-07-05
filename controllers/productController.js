// controllers/productController.js
// POST /products
// GET /products
// GET /products/:id
// PUT /products/:id
// DELETE /products/:id
// createProduct, getProducts, updateProduct, deleteProduct, getById


const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
};

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json({ message: 'Product deleted' });
};

exports.getById = async (req, res)=>{
    const {id} = req.params;
    const product = await Product.findBy(id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
}