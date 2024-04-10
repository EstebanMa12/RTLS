const { 
    createRecord, 
    getValues, 
    updateValue,
    deleteValue,
    getValuesByDate,
    getValuesByHour,
    getValuesByHourRange,
    getValuesByDateRange
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

const getSensorValueByDate = async (date) =>{
    try{
        return getValuesByDate(date)
    }catch(error){
        console.log(error)
    }
}

const getSensorValueByHour = async (hour) =>{
    try{
        return getValuesByHour(hour)
    }catch(error){
        console.log(error)
    }
}

const getSensorValueByHourRange = async (startHour, endHour) =>{
    try{
        return getValuesByHourRange(startHour, endHour)
    }catch(error){
        console.log(error)
    }
}

const getSensorValueByDateRange = async (startDate, endDate) =>{
    try{
        return getValuesByDateRange(startDate, endDate)
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    createSensorValue,
    getSensorValues,
    updateSensorValue,
    deleteSensorValue,
    getSensorValueByDate,
    getSensorValueByHour,
    getSensorValueByHourRange,
    getSensorValueByDateRange
}

