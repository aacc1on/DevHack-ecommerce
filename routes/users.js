// POST /users
// GET /users/:id
// PUT /users/:id
// DELETE /users/:id

const express = require('express');
const router = express.Router();
const { createUser,  updateUser, deleteUser, getById } = require('../controllers/userController');

router.post('/', createUser);
router.get('/:id', getById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;