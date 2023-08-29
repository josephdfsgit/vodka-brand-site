const express = require('express');
const router = express.Router();

const orderSchema = require('../models/order.js');

//SEND ORDER
router.post('/order', async (req, res) => {
    try {
        // Create a new vodka
        const newOrder = new orderSchema({
            items: req.body.items,
            ids: req.body.ids,
            quantity: req.body.quantity,
            subtotal: req.body.subtotal,
            total: req.body.total,
            date: req.body.date,
            shippingInfo: req.body.shippingInfo,
            paymentInfo: req.body.paymentInfo,
            status: 'Ordered'
        });

        // Save the new vodka to the database
        const savedOrder = await newOrder.save();
        console.log('Order saved successfully:', savedOrder);
        res.status(200).json(savedOrder); 
    } catch (error) {
        console.error('Error saving vodka:', error);
        res.status(500).json({ error: 'Failed to save Order' });
    }
});

//GET ALL ORDERS
router.get('/', async (req, res) => {
    try{
        const Orders = await orderSchema.find().sort('name');
        res.send(Orders);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

//FIND AN ORDER 
router.get('/find/:id', async (req, res) => {
    try{
        const Order = await orderSchema.findById(req.params.id);
        res.send(Order);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

//UPDATE ORDER BY ID METHOD
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedOrder = req.body;
        const options = { new: true };

        const savedOrder = await orderSchema.findByIdAndUpdate(id, updatedOrder, options);
        res.send(savedOrder);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//DELETE ORDER BY ID METHOD
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await orderSchema.findByIdAndDelete(id);
        res.send(`Document with ${data.title} has been deleted..`);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;