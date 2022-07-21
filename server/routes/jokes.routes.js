const JokeController = require("../controllers/jokes.controller");
const Joke = require("../models/jokes.model");

module.exports = app => {
    // CREATE 
    app.post("/api/jokes/new", JokeController.createJoke);
    // READ ONE
    app.get("/api/jokes/:_id", JokeController.findOneJoke);
    // READ ALL 
    app.get("/api/jokes", JokeController.findAllJoke);
    // UPDATE 
    app.put("/api/jokes/update/:_id", JokeController.updateJoke);
    // DELETE
    app.delete("/api/jokes/delete/:_id", JokeController.deleteJoke);
}