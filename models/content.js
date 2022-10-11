const mongoose = require("mongoose");
const {Schema} = mongoose;
const contentSchema = new Schema({
    title: String,
    content: String
}, {timestamps: true});

module.exports = mongoose.model("Content", contentSchema);