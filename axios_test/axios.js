// testClient.js
const axios = require('axios');

const BASE_URL = '  '; // փոխիր ըստ քո սերվերի

const testApi = async () => {
  try {
    // ▶️ 1. USERS
    const newUser = {
      name: 'john',
      email: `john${Date.now()}@devhack.com`,
      password: 'password123',
      address: 'Yerevan',
      phone: '099999999'
    };
    const user = await axios.post(`${BASE_URL}/users`, newUser);
    console.log('✅ Created user:', user.data);
    const userId = user.data._id;

    // ▶️ 2. PRODUCTS
    const newProduct = {
      name: 'Laptop',
      price: 999.99,
      description: 'Powerful machine',
      stock: 10
    };
    const product = await axios.post(`${BASE_URL}/products`, newProduct);
    console.log('✅ Created product:', product.data);
    const productId = product.data._id;

    // ▶️ 3. CART
    await axios.post(`${BASE_URL}/carts/${userId}/add`, {
      productId,
      quantity: 2
    });
    console.log('✅ Product added to cart');

    const cart = await axios.get(`${BASE_URL}/carts/${userId}`);
    console.log('🛒 User cart:', cart.data);

    // ▶️ 4. ORDER
    const order = await axios.post(`${BASE_URL}/orders/${userId}`, {
      items: [
        {
          productId,
          name: product.data.name,
          price: product.data.price,
          quantity: 2
        }
      ],
      totalAmount: product.data.price * 2,
      status: 'pending'
    });
    console.log('✅ Created order:', order.data);
    const orderId = order.data._id;

    // ▶️ 5. GET ORDER BY USER
    const orders = await axios.get(`${BASE_URL}/orders/${userId}`);
    console.log('📦 Orders for user:', orders.data);

    // ▶️ 6. GET ORDER BY ID
    const fetchedOrder = await axios.get(`${BASE_URL}/orders/${orderId}`);
    console.log('📦 Order by ID:', fetchedOrder.data);

    // ▶️ 7. DELETE CART
    await axios.delete(`${BASE_URL}/carts/${userId}`);
    console.log('🗑️ Cart deleted');

    // ▶️ 8. DELETE USER
    await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log('🗑️ User deleted');

    // ▶️ 9. DELETE PRODUCT
    await axios.delete(`${BASE_URL}/products/${productId}`);
    console.log('🗑️ Product deleted');

  } catch (error) {
    console.error('❌ Error during testing:', error.response?.data || error.message);
  }
};

testApi();
