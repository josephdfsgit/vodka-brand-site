const mongoose = require('mongoose')

const InventoryURI = process.env.INVENTORY || 
    "mongodb+srv://username:abcd1234@vodkadb.nchta16.mongodb.net/Inventory?retryWrites=true&w=majority";
const SystemURI = process.env.SYSTEM || 
    "mongodb+srv://username:abcd1234@vodkadb.nchta16.mongodb.net/Systems?retryWrites=true&w=majority";

// Establish connections to databases
const inventoryDB = mongoose.createConnection(InventoryURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const systemDB = mongoose.createConnection(SystemURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// Export the connections and connectDBs function
module.exports = {
    inventoryDB,
    systemDB,
    connectDBs: () => ({
        inventoryDB,
        systemDB
    })
};
