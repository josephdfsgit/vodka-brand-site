const express = require('express');
const router = express.Router();
const { vodkaModel, glassModel, merchModel } = require('../models/inventory.js');

//POST VODKA TO INVENTORY
router.post('/post/vodka', async (req, res) => {
    try {
        //CREATE NEW VODKA
        const newVodka = new vodkaModel({
            name: req.body.name,
            alcohol: req.body.alcohol,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            productIMG : req.body.productIMG
        });

        //SAVE NEW VODKA
        const savedVodka = await newVodka.save();
        console.log('Vodka saved successfully:', savedVodka);
        res.status(200).json(savedVodka); 
    } catch (error) {
        console.error('Error saving vodka:', error);
        res.status(500).json({ error: 'Failed to save Vodka' });
    }
});

//POST GLASS TO INVENTORY
router.post('/post/glass', async (req, res) => {
    try {
        //CREATE NEW GLASS
        const newGlass = new glassModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            productIMG: req.body.productIMG
        });

        //SAVE NEW GLASS
        const savedGlass = await newGlass.save();
        console.log('Glass saved successfully:', savedGlass);
        res.status(200).json(savedGlass); 
    } catch (error) {
        console.error('Error saving glass:', error);
        res.status(500).json({ error: 'Failed to save Glass' });
    }
});

//POST MERCH TO INVENTORY
router.post('/post/merch', async (req, res) => {
    try {
        //CREATE NEW MERCH
        const newMerch = new merchModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            productIMG: req.body.productIMG
        });

        //SAVE NEW MERCH
        const savedMerch = await newMerch.save();
        console.log('Merch saved successfully:', savedMerch);
        res.status(200).json(savedMerch); 
    } catch (error) {
        console.error('Error saving merch:', error);
        res.status(500).json({ error: 'Failed to save Merch' });
    }
});

//GET VODKA COLLECTION
router.get('/vodka', async (req, res) => {
    try{
        const Vodka = await vodkaModel.find().sort('name');
        res.send(Vodka);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

//GET GLASS COLLECTION
router.get('/glass', async (req, res) => {
    try{
        const Glass = await glassModel.find().sort('name');
        res.send(Glass);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

//GET MERCH COLLECTION
router.get('/merch', async (req, res) => {
    try{
        const Merch = await merchModel.find().sort('name');
        res.send(Merch);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

//GET 1 VODKA METHOD
router.get('/vodka/:id', async (req, res) => {
    try{
        const Vodka = await vodkaModel.findById(req.params.id);
        res.send(Vodka);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

//UPDATE VODKA BY ID
router.patch('/vodka/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedVodka = req.body;
        const options = { new: true };

        const savedVodka = await vodkaModel.findByIdAndUpdate(id, updatedVodka, options);
        res.send(savedVodka);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//DELETE VODKA BY ID
router.delete('/vodka/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await vodkaModel.findByIdAndDelete(id);
        res.send(`Document with ${data.title} has been deleted..`);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//GET 1 GLASS METHOD
router.get('/glass/:id', async (req, res) => {
    try{
        const Glass = await glassModel.findById(req.params.id);
        res.send(Glass);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

//UPDATE GLASS BY ID
router.patch('/glass/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedGlass = req.body;
        const options = { new: true };

        const savedGlass = await glassModel.findByIdAndUpdate(id, updatedGlass, options);
        res.send(savedGlass);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//DELETE GLASS BY ID
router.delete('/glass/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await glassModel.findByIdAndDelete(id);
        res.send(`Document with ${data.title} has been deleted..`);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//GET 1 MERCH METHOD
router.get('/merch/:id', async (req, res) => {
    try{
        const Merch = await merchModel.findById(req.params.id);
        res.send(Merch);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

//UPDATE MERCH BY ID
router.patch('/merch/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedMerch = req.body;
        const options = { new: true };

        const savedMerch = await merchModel.findByIdAndUpdate(id, updatedMerch, options);
        res.send(savedMerch);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//DELETE MERCH BY ID
router.delete('/merch/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await merchModel.findByIdAndDelete(id);
        res.send(`Document with ${data.title} has been deleted..`);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;