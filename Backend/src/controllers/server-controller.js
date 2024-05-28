const {
    getSensorValues,
    updateSensorValue,
    deleteSensorValue,
    createSensorValue,
    getSensorValueByDate,
    getSensorValueByHour,
    getSensorValueByHourRange,
    getSensorValueByDateRange
} = require('../services/server-service.js');


const getSensor = async (req, res) => {
    try {
        const values = await getSensorValues();
        res.status(200).json(values);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createSensor = async (req, res) => {
    try {
        const data = req.body;
        const newValue = await createSensorValue(data);
        res.status(201).json({
                message: 'Values created successfully in the documents',
                data: newValue
            });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const getSensorByDate = async (req, res) => {

    const { date } = req.params;
    try {
        const values = await getSensorValueByDate(date);
        res.status(200).json(values);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getSensorByHour = async (req, res) => {
    const { hour } = req.params;
    try {
        const values = await getSensorValueByHour(hour);
        res.status(200).json(values);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getSensorByHourRange = async (req, res) => {
    const { startHour, endHour } = req.params;
    try {
        const values = await getSensorValueByHourRange(startHour, endHour);
        res.status(200).json(values);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getSensorByDateRange = async (req, res) => {
    const { startDate, endDate } = req.params;
    try {
        const values = await getSensorValueByDateRange(startDate, endDate);
        res.status(200).json(values);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const updateSensor = async (req, res) => {
    const { id } = req.params;
    const value = req.body;
    try {
        const updatedValue = await updateSensorValue(id, value);
        res.status(200).json(updatedValue);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const deleteSensor = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteSensorValue(id);
        res.status(200).json({ message: 'Value deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
    getSensor,
    createSensor,
    updateSensor,
    deleteSensor,
    getSensorByDate,
    getSensorByHour,
    getSensorByHourRange,
    getSensorByDateRange
}



