const mongoose = require('mongoose');


const ValueSchema = new mongoose.Schema({
    value: {
        type: Number,
        default: 0,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
},{
    collection:'Values'
});

const ButtonSchema = new mongoose.Schema({
    state: {
        type: Boolean,
        default: false,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
},{
    collection:'Button'
});

const ValuesDB = mongoose.model("Value", ValueSchema);
const ButtonDB = mongoose.model("Button", ButtonSchema);

module.exports = {
    ValuesDB,
    ButtonDB
}
