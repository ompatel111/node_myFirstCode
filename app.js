const express = require('express');

const app = express();
const bt = require('./router/student')

app.use(express.json());

app.use('/',bt);

app.listen(5000, ()=>{
    console.log('Server is running on port 5000')
})