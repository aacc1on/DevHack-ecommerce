// POST /carts/:userId/add
// GET /carts/:userId
// PUT /carts/:userId/remove
// DELETE /carts/:userId


//createCart, getCart, updateCart, deleteCart 
const Cart = require('../models/Cart');

exports.createCart = async (req, res) => {
  try {
    const { userId } = req.params; 
    const cart = new Cart({ userId, items: [] });
    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error creating cart', error: error.message });
  }
};


exports.getCart = async (req, res) => {
    try{
        const {userId} = req.params;
        const cart = await Cart.findOne({ userId: userId }).populate('items.productId');
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.status(200).json(cart);
    }catch(error){
        res.status(500).json({ message: 'Error getting cart', error: error.message });
      }
}

exports.updateCart = async (req, res)=>{
    try{
        const {userId } = req.params;
        const {productId, quantity } = req.body;
        const cart = await Cart.findOneAndUpdate(
            { userId: userId, 'items.productId': productId },
            { $set: { 'items.$.quantity': quantity } },
            { new: true }
        );
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.status(200).json(cart);
    }catch(error){
        res.status(500).json({ message: 'Error updating cart', error: error.message });
    }
};


exports.deleteCart = async (req, res) => {
    try {
        const { userId } = req.params;
        const cart = await Cart.findOneAndDelete({ userId: userId });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.status(200).json({ message: 'Cart deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting cart', error: error.message }); 

    }
};

