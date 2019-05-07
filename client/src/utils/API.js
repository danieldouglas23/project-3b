import axios from "axios";

export default {
    searchJobs: function () {
        return axios.get("https://official-joke-api.appspot.com/random_ten");
    },
    // Gets all Jobs
    getJobs: function () {
        return axios.get("/api/Jobs");
    },

    // Gets the Job with the given id
    getJob: function (id) {
        return axios.get("/api/Jobs/" + id);
    },

    // Saves a Job to the database
    saveJob: function (savedJobs) {
        return axios.post("/api/Jobs", savedJobs);
    },

    // Deletes the Job with the given id
    deleteJob: function (id) {
        return axios.delete("/api/Jobs/" + id);
    }
};
