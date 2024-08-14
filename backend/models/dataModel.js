const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    title: {type: String , required: true},
    completed: {type: Boolean, required: true}
})

const Data = mongoose.model("data" , dataSchema);

module.exports = Data