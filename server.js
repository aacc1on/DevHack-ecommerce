require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use('/products', require('./routes/products'));
app.use('/users', require('./routes/users'));
app.use('/carts', require('./routes/carts'));
app.use('/orders', require('./routes/orders'));



// app.use(errorHandler);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${process.env.PORT}`);
  });
});
