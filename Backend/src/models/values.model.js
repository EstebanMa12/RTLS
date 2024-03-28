import mongoose from "mongoose";

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

export const ValuesDB = mongoose.model("Value", ValueSchema);