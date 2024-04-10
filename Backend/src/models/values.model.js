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

const ValuesDB = mongoose.model("Value", ValueSchema);

module.exports = {
    ValuesDB
}
