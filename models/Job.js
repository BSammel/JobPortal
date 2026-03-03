const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: {
        type: String, required: true},
    description: {
        type: String, required: true
    },
    requirements: {type: String, required: true},
    location: {type: String, required: true},
    category: {type: String, required: true},
    company: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    type: {type: String, enum: ["Remote","full-time", "part-time", "Internship","contract"], required: true},

    salaryMin:{type: Number},
    salaryMax:{type: Number},
    isClosed: {type: Boolean, default: false}
}, {timestamps: true});

module.exports = mongoose.model("Job", jobSchema);
