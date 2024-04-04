const mongoose = require('mongoose');


const ValueSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const ValuesDB = mongoose.model("Value", ValueSchema);

module.exports = {
    ValuesDB
}