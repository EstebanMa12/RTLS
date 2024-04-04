const { db } = require("../config/database/firebase/firebaseConfig");

const createRecordFB = async (value) => {
    try {
        return db.collection("users").add(value);
    } catch (error) {
        console.log(error);
    }
}

const getValuesFB = async () => {
    try {
        return db.collection("users").get();
    } catch (error) {
        console.log(error);
    }
}

const getValueInfoFB = async (id) => {
    try {
        return db.collection("users").doc(id).get();
    } catch (error) {
        console.log(error);
    }
}

const updateValue = async (id, value) => {
    try {
        return db.collection("users").doc(id).update(value);
    } catch (error) {
        console.log(error);
    }
}

const deleteValueFB = async (id) => {
    try {
        return db.collection("users").doc(id).delete();
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    createRecordFB,
    getValueInfoFB,
    getValuesFB,
    updateValue,
    deleteValueFB
}