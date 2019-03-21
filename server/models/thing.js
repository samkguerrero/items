const mongoose = require('mongoose');
require('../config/mongoose.js');

const ThingSchema = new mongoose.Schema({
    content: {
        type: String, 
        required: true, 
        minlength: 3
    }
}, {timestamps: true});

module.exports = {
    model: mongoose.model('Thing', ThingSchema),
    schema: ThingSchema 
}