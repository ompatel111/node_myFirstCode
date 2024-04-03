const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
app.use(express.json());


app.get('/', function (req, res) {
  res.send('Welcome to my hotels, how can i help you?')
})

    //Import the router file of persons
   const personRoutes = require('./router/personRoutes');
   const menuItemRoutes = require('./router/menuItemRoutes');

   //Use the routes
   app.use('/person', personRoutes);
   app.use('/menu', menuItemRoutes);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})