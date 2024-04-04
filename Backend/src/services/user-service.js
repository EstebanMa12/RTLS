const {
    createRecordFB,
    getValueInfoFB,
    getValuesFB,
    updateValueFB,
    deleteValueFB
} = require("../repositories/server-fb.repository");

// The firebase database will be used to manage the users in the web app 

const createUser = async (value) => {
    try {
        return createRecordFB(value);
    } catch (error) {
        console.log(error);
    }
}

const getUsers = async () => {
    try {
        return getValuesFB();
    } catch (error) {
        console.log(error);
    }
}

const getUserInfo = async (id) => {
    try {
        return getValueInfoFB(id);
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (id, value) => {
    try {
        return updateValueFB(id, value);
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async (id) => {
    try {
        return deleteValueFB(id);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserInfo,
    updateUser,
    deleteUser
}