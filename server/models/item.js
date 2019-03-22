const mongoose = require('mongoose');
require('../config/mongoose.js');

const ItemSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true, 
    uniqueItems: true,
    minlength: 3
  },
  type: {
    type: String, 
    required: true, 
    minlength: 3
  },
  desc: {
    type: String, 
    required: true, 
    minlength: 3
  },
  likes: {
    type: Number,
    min: 0
  },
  skill1: String,
  skill2: String,
  skill3: String,
}, {timestamps: true});

module.exports = mongoose.model('Item', ItemSchema)