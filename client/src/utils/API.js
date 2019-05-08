import axios from "axios";

export default {
    searchJokes: function () {
        return axios.get("https://official-joke-api.appspot.com/random_ten");
    },
    // Gets all Jokes
    getJokes: function () {
        return axios.get("/api/jokes");
    },

    // Gets the Joke with the given id
    getJoke: function (id) {
        return axios.get("/api/jokes/" + id);
    },

    // Saves a Joke to the database
    saveJoke: function (savedJokes) {
        return axios.post("/api/jokes", savedJokes);
    },

    // Deletes the Joke with the given id
    deleteJoke: function (id) {
        return axios.delete("/api/jokes/" + id);
    }
};
