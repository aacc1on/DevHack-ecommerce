# DevHack-ecommerce

---

```markdown
# 🛒 DevHack E-commerce API

A RESTful e-commerce backend built with **Node.js**, **Express**, and **MongoDB**.  
Supports user management, product catalog, cart operations, and order processing — perfect for learning or kickstarting an e-commerce app.

---

## 🚀 Features

- 🔐 User creation (basic, no auth yet)
- 🛍 Product CRUD
- 🛒 Cart with add/remove/clear functionality
- 📦 Order placement with product snapshots
- 📦 Auto-calculation of total order amount
- 📚 Modular MVC structure

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose ODM
- **Environment Management:** dotenv
- **Development Tools:** Nodemon

---

## 📁 Folder Structure

```
devhack-ecommerce-api/
├── .env
├── .gitignore
├── package.json
├── server.js
├── config/
│   └── db.js
├── models/
│   ├── User.js
│   ├── Product.js
│   ├── Cart.js
│   └── Order.js
├── routes/
│   ├── users.js
│   ├── products.js
│   ├── carts.js
│   └── orders.js
├── controllers/
│   ├── userController.js
│   ├── productController.js
│   ├── cartController.js
│   └── orderController.js
├── middlewares/
│   └── errorHandler.js
└── utils/
    └── helpers.js


````

---

## ⚙️ Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/devhack-ecommerce-api.git
cd devhack-ecommerce-api
````

2. **Install dependencies:**

```bash
npm install
```

3. **Create `.env` file:**

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/devhackDB
```

4. **Run the server:**

```bash
npx nodemon server.js
```

---

## 📬 API Endpoints

### Users

```
POST    /users
GET     /users/:id
PUT     /users/:id
DELETE  /users/:id
```

### Products

```
POST    /products
GET     /products
GET     /products/:id
PUT     /products/:id
DELETE  /products/:id
```

### Cart

```
POST    /carts/:userId/add        # Add item to cart
GET     /carts/:userId            # Get cart
PUT     /carts/:userId/remove     # Remove item
DELETE  /carts/:userId            # Clear cart
```

### Orders

```
POST    /orders/:userId           # Place order from cart
GET     /orders/:userId           # Get all orders by user
GET     /orders/:orderId          # Get one order
```

---

## 🧪 Example Product JSON

```json
{
  "name": "Wireless Mouse",
  "description": "Ergonomic design",
  "price": 25.99,
  "category": "Accessories",
  "stock": 100
}
```

---

## 📦 Deployment

You can deploy to:

* [Render](https://render.com)
* [Railway](https://railway.app)
* [Heroku](https://heroku.com)
* Any VPS (DigitalOcean, AWS, Hetzner)

Update your `.env` with:

```env
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/devhackDB
```

---


