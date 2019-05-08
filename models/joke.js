const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jokeSchema = new Schema({
    setup: String,
    punchline: String,
    date: { type: Date, default: Date.now }
});

const Joke = mongoose.model("Joke", jokeSchema);

module.exports = Joke;