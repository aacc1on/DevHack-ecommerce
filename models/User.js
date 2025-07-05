const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  name: {type: String, required: true}, 
  email: {type: String, required: true, unique: true},
  pasword: {type: String, HashChangeEventd: true},
  adress: String,
  phone: String,
  
},{
    timestamps: true
});

module.exports = mongoose.model('User', usersSchema);