//mongoose db connection
const mongoose = require('mongoose');


const JokeSchema = new mongoose.Schema({
        setup: {
            type: String,
            minlength: [10, "setup must be atleast 10 characters"]
        },
        punchline: {
            type: String,
            minlength: [2, "punchline must be atleast 2 characters"]
        }
    },
);

const Joke = mongoose.model("Joke", JokeSchema)

module.exports = Joke;