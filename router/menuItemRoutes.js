const express = require('express');

const router = express.Router();
const MenuItem = require('../models/MenuItem');

//Post method to add a menu
router.post('/', async(req,res)=>{
    try{
        const data = req.body
        const menuItem = new MenuItem(data);
        const response = await menuItem.save();
        console.log(response);
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err: "Internal server error"});
    }
});

//Get method to get all menus

router.get('/', async(req,res)=>{
    try{
        const response = await MenuItem.find();
        console.log("data fetched")
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err: "Internal server error"});
    }
})

//taste endpoint

router.get('/:taste', async(req,res)=>{
    try{
        const taste = req.params.taste;
        if(taste == 'sweet' || taste == 'sour' || taste == 'spicy'){
            const response = await MenuItem.find({taste: taste});
            console.log("data fetched")
            res.status(200).json(response);
       }
       else{
           res.status(400).json({err: "Invalid work type"});
       }
    }
    catch(err){
        console.log(err);
        res.status(500).json({err: "Internal server error"});
    }
})

//update the dish if needed

router.put('/:id', async(req, res)=>{
    try{
        const id = req.params.id;
        const data = req.body;
        const menuItem = await MenuItem.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true
        })
          if(!menuItem){
            res.status(404).json({err: "No menu item found"});
          }
         console.log("menu item updated");
        res.status(200).json(menuItem);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err: "Internal server error"});
    }
})


//delete the dish if needed

router.delete('/:id', async(req,res)=>{
    try{
        const id = req.params.id;
        const menuItem = await MenuItem.findByIdAndDelete(id);
        if(!menuItem){
            res.status(404).json({err: "No menu item found"});
        }
        console.log("menu item deleted");
        res.status(200).json({message: "Menu item deleted"});

    }
    catch(err){
        console.log(err);
        res.status(500).json({err: "Internal server error"});
    }
    })

module.exports = router;