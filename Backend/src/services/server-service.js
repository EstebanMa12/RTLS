import { 
    createRecord, 
    getValueInfo, 
    getValues, 
    updateValue,
    deleteValue
} from "../repositories/server-mongo.repository";



// The mongo database will be used by the sensor and MQTT protocol
export const createSensorValue = async (value) => {
    try {
        return createRecord(value);
    } catch (error) {
        console.log(error);
    }
}

export const getSensorValues = async () => {
    try {
        return getValues();
    } catch (error) {
        console.log(error);
    }
}

export const getSensorValueInfo = async (id) => {
    try {
        return getValueInfo(id);
    } catch (error) {
        console.log(error);
    }
}

export const updateSensorValue = async (id, value) => {
    try {
        return updateValue(id, value);
    } catch (error) {
        console.log(error);
    }
}

export const deleteSensorValue = async (id) => {
    try {
        return deleteValue(id);
    } catch (error) {
        console.log(error);
    }
}


