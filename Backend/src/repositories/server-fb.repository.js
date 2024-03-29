import { db } from "../config/database/firebase/firebaseConfig";

export const createRecordFB = async (value) => {
    try {
        return db.collection("users").add(value);
    } catch (error) {
        console.log(error);
    }
}

export const getValuesFB = async () => {
    try {
        return db.collection("users").get();
    } catch (error) {
        console.log(error);
    }
}

export const getValueInfoFB = async (id) => {
    try {
        return db.collection("users").doc(id).get();
    } catch (error) {
        console.log(error);
    }
}

export const updateValue = async (id, value) => {
    try {
        return db.collection("users").doc(id).update(value);
    } catch (error) {
        console.log(error);
    }
}

export const deleteValueFB = async (id) => {
    try {
        return db.collection("users").doc(id).delete();
    } catch (error) {
        console.log(error);
    }
}
