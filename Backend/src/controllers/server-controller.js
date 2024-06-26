const {
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
} = require('../services/server-service.js');



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

const generateReport = async (req, res) => {
    const { startDate, endDate } = req.params;
    try {
        const report = await generateSensorReport(startDate, endDate);
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getSensor = async (req, res) => {
    try {
        const values = await getLastSensorValues();
        res.status(200).json(values);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateButton = async (req, res) => {
    const { id } = req.params;
    const value = req.body;
    try {
        const updatedValue = await updateSensorButton(id, value);
        res.status(200).json(updatedValue);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const deleteButton = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteSensorButton(id);
        res.status(200).json({ message: 'Value deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const stats = async (req, res) => {
    const { startDate, endDate } = req.params;
    try {
        const stats = await calculateSensorStatistics(startDate, endDate);
        res.status(200).json(stats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const alerts = async (req, res) => {
    try {
        const alerts = await checkForSensorAlerts();
        res.status(200).json(alerts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const sensorValues = async (req, res) => {
    try {
        const page = req.query.page ? parseInt(req.query.page) : null;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : null;
        const values = await getSensorValues(page, pageSize);
        res.status(200).json(values);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const buttonValues = async (req, res) => {
    try {
        const page = req.query.page ? parseInt(req.query.page) : null;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : null;
        const values = await getButtonValues(page, pageSize);
        res.status(200).json(values);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const completeReport = async (req, res) => {
    const { date } = req.params;
    try {
        const report = await generateCompleteSensorReport(date);
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}




module.exports = {
    getSensor,
    createSensor,
    updateSensor,
    deleteSensor,
    getSensorByDate,
    generateReport,
    stats,
    alerts,
    updateButton,
    deleteButton,
    sensorValues,
    buttonValues,
    completeReport
}



