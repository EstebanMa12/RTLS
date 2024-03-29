
import { ValuesDB } from "../models/values.model";

export const getValues = async () => {
    try {
        return ValuesDB.find();
    }catch (error){
        console.log(error)
    }
}

export const createRecord = async (value) => {
    try {
        return ValuesDB.create(value);
    }catch (error){
        console.log(error)
    }
}

export const getValueInfo = async (id) => {
    try {
        return ValuesDB.findById(id);
    }catch (error){
        console.log(error)
    }
}

// Update
export const updateValue = async (id, value) => {
    try {
        return ValuesDB.findByIdAndUpdate
        (id, value, {new: true});
    }
    catch (error){
        console.log(error)
    }
}

// Delete
export const deleteValue = async (id) => {
    try {
        return ValuesDB.findByIdAndDelete(id);
    }
    catch (error){
        console.log(error)
    }
}



