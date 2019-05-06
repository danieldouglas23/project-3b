const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    city: { type: String, required: true },
    jobLevel: String,
    category: String,
    date: { type: Date, default: Date.now }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;