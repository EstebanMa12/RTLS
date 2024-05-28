const mongoose = require('mongoose');


const ValueSchema = new mongoose.Schema({
    movement: {
        type: Boolean,
        default: false,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
},{
    collection:'Sensor'
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

const SensorDB = mongoose.model("Sensor", ValueSchema);
const ButtonDB = mongoose.model("Button", ButtonSchema);

module.exports = {
    SensorDB,
    ButtonDB
}
