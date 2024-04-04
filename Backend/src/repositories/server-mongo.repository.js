
const { ValuesDB } = require("../models/values.model");

const getValues = async () => {
    try {
        return ValuesDB.find();
    }catch (error){
        console.log(error)
    }
}

const createRecord = async (value) => {
    try {
        return ValuesDB.create(value);
    }catch (error){
        console.log(error)
    }
}

const getValueInfo = async (id) => {
    try {
        return ValuesDB.findById(id);
    }catch (error){
        console.log(error)
    }
}

// Update
const updateValue = async (id, value) => {
    try {
        return ValuesDB.findByIdAndUpdate
        (id, value, {new: true});
    }
    catch (error){
        console.log(error)
    }
}

// Delete
const deleteValue = async (id) => {
    try {
        return ValuesDB.findByIdAndDelete(id);
    }
    catch (error){
        console.log(error)
    }
}

module.exports = {
    createRecord,
    getValueInfo,
    getValues,
    updateValue,
    deleteValue
}



