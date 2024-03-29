import { db } from "../config/database/firebase/firebaseConfig";

export const createRecord = async (value) => {
    try {
        return db.collection("users").add(value);
    } catch (error) {
        console.log(error);
    }
}

export const getValues = async () => {
    try {
        return db.collection("users").get();
    } catch (error) {
        console.log(error);
    }
}

export const getValueInfo = async (id) => {
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

export const deleteValue = async (id) => {
    try {
        return db.collection("users").doc(id).delete();
    } catch (error) {
        console.log(error);
    }
}
