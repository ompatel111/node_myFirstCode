const express = require('express')
const router = express.Router()

router.get('/students', (req, res)=>{
    res.send('welcome, there are 100 students in my school')
})

router.get('/rollNo', (req, res)=>{
    res.send('your roll no is 123456789')
})

module.exports = router;
