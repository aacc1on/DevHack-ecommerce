// createUser,  updateUser, deleteUser, getById

const User = require('../models/User');



exports.createUser = async (req, res) => {
    const user = new User(req.body);
    if (!user){
        return res.status(400).json({ message: 'Invalid input' });
    }
    await user.save();
    res.status(201).json(user);
}

exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const user = await User.findByIdAndUpdate(userId, req.body, { new: true });
    if (!user) {    
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
}


exports.deleteUser = async (req, res) => {
    const id = req.params.id ;
    const user = await User.findByIdAndDelate(id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted' });
}

exports.getById = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
}

