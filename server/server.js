const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const { connectDBs } = require('./database/db.js');
const inventoryRoute = require('./routes/inventory.js');
const orderRoute = require('./routes/orders.js');
const messageRoute = require('./routes/messages.js');

const app = express();
const port = process.env.PORT || 3001;

// Use middlewares
app.use(express.json());
app.use(cors());

// Serve static frontend files from the 'dist' directory
app.use(express.static(path.resolve(__dirname, '../dist')));

// Serve static assets from the 'assets' directory
app.use('/assets', express.static(path.resolve(__dirname, '../src/assets')));

// Define your API routes or other server-side logic here
app.use('/inventory', inventoryRoute); 
app.use('/orders', orderRoute); 
app.use('/messages', messageRoute);

// Start the server
(async () => {
    try {
        const { inventoryDB, orderDB } = await connectDBs(); // Use await to get the connection objects
        console.log('<j> [API Server] ~ Connection To DataBase Established --MongoDB{Inventory} --MongoDB{System}');
        app.listen(port, () => {
            console.log(`<j> [API Server] ~ now running on PORT:${port}`);
        });
    } catch (error) {
        console.error('An error occurred:', error);
        process.exit(1);
    }
})();
