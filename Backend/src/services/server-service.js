const {
    createRecord,
    updateValue,
    deleteValue,
    getValuesByDate,
    calculateUsageStatistics,
    generateUsageReport,
    checkForAlerts,
    getLastValues,
    updateButton,
    deleteButton,
    buttonValues,
    sensorValues,
    generateCompleteUsageReport
} = require("../repositories/server-mongo.repository");



// The mongo database will be used by the sensor and MQTT protocol
const createSensorValue = async (data) => {
    try {
        return createRecord(data);
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

const getSensorValueByDate = async (date) => {
    try {
        return getValuesByDate(date)
    } catch (error) {
        console.log(error)
    }
}

const calculateSensorStatistics = async (startDate, endDate) => {
    try {
        return calculateUsageStatistics(startDate, endDate)
    } catch (error) {
        console.log(error)
    }
}

const generateSensorReport = async (startDate, endDate) => {
    try {
        return generateUsageReport(startDate, endDate)
    } catch (error) {
        console.log(error)
    }
}

const checkForSensorAlerts = async () => {
    try {
        return checkForAlerts()
    } catch (error) {
        console.log(error)
    }
}

const getLastSensorValues = async () => {
    try {
        return getLastValues()
    } catch (error) {
        console.log(error)
    }
}

const updateSensorButton = async (id, value) => {
    try {
        return updateButton(id, value)
    } catch (error) {
        console.log(error)
    }
}

const deleteSensorButton = async (id) => {
    try {
        return deleteButton(id)
    } catch (error) {
        console.log(error)
    }
}

const getSensorValues = async (page, pageSize) => {
    try {
        return sensorValues(page, pageSize)
    } catch (error) {
        console.log(error)
    }
}

const getButtonValues = async (page, pageSize) => {
    try {
        return buttonValues(page, pageSize)
    } catch (error) {
        console.log(error)
    }
}

const generateCompleteSensorReport = async (date) => {
    try {
        return generateCompleteUsageReport(date)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createSensorValue,
    updateSensorValue,
    deleteSensorValue,
    getSensorValueByDate,
    calculateSensorStatistics,
    generateSensorReport,
    checkForSensorAlerts,
    getLastSensorValues,
    updateSensorButton,
    deleteSensorButton,
    getSensorValues,
    getButtonValues,
    generateCompleteSensorReport
}

