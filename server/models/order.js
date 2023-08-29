const mongoose = require('mongoose');
const { connectDBs } = require('../database/db.js');
const { systemDB } = connectDBs();
const currentYear = new Date().getFullYear();

// Create a schema for the individual movement objects
const orderSchema = new mongoose.Schema({
    items: {
        required: true,
        type: [String]
    },
    ids: {
        required: true,
        type: [String]
    },
    quantity: {
        required: true,
        type: Number
    },
    subtotal: {
        required: true,
        type: Number 
    },
    total: {
        required: true,
        type: Number
    },
    date: {
        required: true,
        type: Date
    },
    shippingInfo: {
        name: {
            required: true,
            type: String
        },
        email: {
            required: true,
            type: String
        },
        address: {
            required: true,
            type: String
        },
        city: {
            required: true,
            type: String
        },
        state: {
            required: true,
            type: String
        },
        zip: {
            required: true,
            type: String
        }
    },
    paymentInfo: {
        cname: {
            required: true,
            type: String
        },
        ccnum: {
            required: true,
            type: String
        },
        expdate: {
            required: true,
            type: String
        },
        cvv: {
            required: true,
            type: Number
        }
    },
    status: {
        required: true,
        type: String
    }
});

module.exports = systemDB.model('orders-'+currentYear.toString(), orderSchema);