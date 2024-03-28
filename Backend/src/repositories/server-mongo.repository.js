
import { ValuesDB } from "../models/values.model";

export const getValues = async () => {
    try {
        return ValuesDB.find();
    }catch (error){
        console.log(error)
    }
}

