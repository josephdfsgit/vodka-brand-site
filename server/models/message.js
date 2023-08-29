const mongoose = require('mongoose');
const { connectDBs } = require('../database/db.js');
const { systemDB } = connectDBs();

// Create a schema for the individual movement objects
const messageSchema = new mongoose.Schema({
    date: {
        required: true,
        type: Date
    },
    name: {
        required: true,
        type: String
    },
    company: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String,
    },
    message: {
        required: true,
        type: String
    }
});

module.exports = systemDB.model('message', messageSchema);