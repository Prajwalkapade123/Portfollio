const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: String,
        tech: [String],
        problem: { type: String, required: true },
        solution: { type: String, required: true },
        result: { type: String, required: true },
        githubLink: String,
        liveLink: String,
        image: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
