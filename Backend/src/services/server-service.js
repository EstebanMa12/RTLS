const { 
    createRecord, 
    getValueInfo, 
    getValues, 
    updateValue,
    deleteValue
} = require("../repositories/server-mongo.repository");



// The mongo database will be used by the sensor and MQTT protocol
const createSensorValue = async (value) => {
    try {
        return createRecord(value);
    } catch (error) {
        console.log(error);
    }
}

const getSensorValues = async () => {
    try {
        return getValues();
    } catch (error) {
        console.log(error);
    }
}

const getSensorValueInfo = async (id) => {
    try {
        return getValueInfo(id);
    } catch (error) {
        console.log(error);
    }
}

const updateSensorValue = async (id, value) => {
    try {
        return updateValue(id, value);
    } catch (error) {
        console.log(error);
    }
}

const deleteSensorValue = async (id) => {
    try {
        return deleteValue(id);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createSensorValue,
    getSensorValues,
    getSensorValueInfo,
    updateSensorValue,
    deleteSensorValue
}

