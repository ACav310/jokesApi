// baseplate mongoose.config.js 
    // change db name line 8

// we need mongoose 
const mongoose = require('mongoose');

// we need to connect to our database
mongoose.connect("mongodb://localhost/jokes", {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
    .then(() => console.log("I found the mongoose"))
    .catch(err => console.log("I lost the mongoose", err))