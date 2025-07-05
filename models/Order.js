const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {calculateTotal} = require('../utils/helpers');


const orderItemSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  name: {
    type: String,
    required: true  
  },
  price: {
    type: Number,
    required: true  
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  }
}, { _id: false });

const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [orderItemSchema],
  totalAmount: {
    type: Number,
    default: 0  
  },
  status: {
    type: String,
    enum: ['pending', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  }
}, {
  timestamps: { createdAt: true, updatedAt: false }
});


orderSchema.pre('save', function (next) {
  this.totalAmount = this.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  next();
});

orderItemSchema.pre('save', function(next){
    this.totalAmount = calculateTotal(this.items);
    next();
});

module.exports = mongoose.model('Order', orderSchema);
