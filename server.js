const express = require('express');
const app = express();
const port = 8000;

// add after mongoose.config
require("./server/config/mongoose.config")


// POST DATA SCRIPT
app.use(express.json(), express.urlencoded({extended: true}));

// must be below post data
const AllMyRoutes = require("./server/routes/jokes.routes");
AllMyRoutes(app);



app.listen(port, () => console.log(`Running on port ${port} :)`))