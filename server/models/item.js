const mongoose = require('mongoose');
require('../config/mongoose.js');

const Thing = require('../models/thing.js');

const ItemSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true, 
    minlength: 3
  },
  things: [Thing.schema]
}, {timestamps: true});

module.exports = mongoose.model('Item', ItemSchema)