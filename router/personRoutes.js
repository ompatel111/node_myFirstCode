const express = require('express');

const router = express.Router();
const Person = require('./../models/Person');

//post method to add person
router.post('/', async(req,res)=>{
    try{
        const data = req.body
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err: "Internal server error"});
    }
})


//get method to get all persons
router.get('/', async(req,res)=>{
    try{
        const data = await Person.find();
        console.log("data fetched")
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err: "Internal server error"});
    }
})


//workType for person

router.get('/:workType', async(req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
             const response = await Person.find({work: workType});
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

// update the person if needed

router.put('/:id', async(req,res)=>{
    try{
        const personId = req.params.id;  //extract the id from the url
        const updatePersonData = req.body; // updated the data for the person
        const response = await Person.findByIdAndUpdate(personId, updatePersonData,{
         new: true,   // return the updated person
         runValidators: true // run mongoose validators
        })

        if(!response){
            res.status(404).json({err: "Person not found"});
        }

        console.log('data updated');
        res.status(200).json(response);
    }
    
    catch(err){
        console.log(err);
        res.status(500).json({err: "Internal server error"});
    }
})

//delete the person if needed

router.delete('/:id', async(req,res)=>{
    try{
        const personId = req.params.id;  //extract the id from the url
        const response = await Person.findByIdAndDelete(personId); //delete the person

        if(!response){
            res.status(404).json({err: "Person not found"});
        }

        console.log('data deleted');
        res.status(200).json({message: "data deleted successfully"}); 
    }
    
    catch(err){
        console.log(err);
        res.status(500).json({err: "Internal server error"});
    }
})


module.exports = router;

