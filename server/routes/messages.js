const express = require('express');
const router = express.Router();

const messageSchema = require('../models/message.js');

//SEND ORDER
router.post('/send', async (req, res) => {
    try {
        // Create a new vodka
        const newMessage = new messageSchema({
            name: req.body.name,
            date: req.body.date,
            company: req.body.company,
            phone: req.body.phone,
            email: req.body.email,
            message: req.body.message
        });

        // Save the new vodka to the database
        const savedMessage = await newMessage.save();
        console.log('Message Sent Successfully:', savedMessage);
        res.status(200).json(savedMessage); 
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Failed to save message' });
    }
});

//GET ALL MESSAGES
router.get('/', async (req, res) => {
    try{
        const Messages = await messageSchema.find().sort('date');
        res.send(Messages);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

//FIND A MESSAGE *********
router.get('/find/:name', async (req, res) => {
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