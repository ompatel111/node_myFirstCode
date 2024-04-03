const mongoose = require('mongoose');

const MongoUrl = 'mongodb://127.0.0.1:27017/hotels'  // replace hotels you can use anything which you can make yourself

// set up mongoose connection

mongoose.connect(MongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
// get the default connection
const db = mongoose.connection;

//define event listeners(these all are event listeners for Mongoose)

db.on('connection', ()=>{
    console.log('Connected to MongoDB')
})

db.on('error',(err)=>{
    console.log('Error connecting to MongoDB', err)
})


db.on('disconnect', ()=>{
    console.log('Disconnected from MongoDB')
})


//Exports the database connection

module.exports = db;