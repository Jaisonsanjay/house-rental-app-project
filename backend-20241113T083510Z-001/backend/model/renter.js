// models/Renter.js
const mongoose = require('mongoose');

const renterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    // Add other fields as needed
});

module.exports = mongoose.model('Renter', renterSchema);
