const mongoose = require('mongoose');
const { connectDBs } = require('../database/db.js');
const { inventoryDB } = connectDBs();

//VODKA
const vodkaSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    alcohol: {
        required: true,
        type: Number
    },
    description: {
        required: true,
        type: String 
    },
    price: {
        required: true,
        type: Number 
    },
    stock: {
        required: true,
        type: Number
    },
    productIMG: {
        required: false,
        type: String
    }
});

//GLASS
const glassSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String 
    },
    price: {
        required: true,
        type: Number 
    },
    stock: {
        required: true,
        type: Number
    },
    productIMG: {
        required: false,
        type: String
    }
});

//MERCH
const merchSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String 
    },
    price: {
        required: true,
        type: Number 
    },
    stock: {
        required: true,
        type: Number
    },
    productIMG: {
        required: false,
        type: String
    }
});

const vodkaModel = inventoryDB.model('vodka', vodkaSchema);
const glassModel = inventoryDB.model('glass', glassSchema);
const merchModel = inventoryDB.model('merch', merchSchema);

module.exports = {
    vodkaModel,
    glassModel,
    merchModel
};