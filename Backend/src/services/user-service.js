import {
    createRecordFB,
    getValueInfoFB,
    getValuesFB,
    updateValueFB,
    deleteValueFB
} from "../repositories/server-fb.repository";

// The firebase database will be used to manage the users in the web app 

export const createUser = async (value) => {
    try {
        return createRecordFB(value);
    } catch (error) {
        console.log(error);
    }
}

export const getUsers = async () => {
    try {
        return getValuesFB();
    } catch (error) {
        console.log(error);
    }
}

export const getUserInfo = async (id) => {
    try {
        return getValueInfoFB(id);
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = async (id, value) => {
    try {
        return updateValueFB(id, value);
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (id) => {
    try {
        return deleteValueFB(id);
    } catch (error) {
        console.log(error);
    }
}
