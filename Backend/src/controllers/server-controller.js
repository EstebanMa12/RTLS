import {
    getSensorValues,
    getSensorValueInfo,
    updateSensorValue,
    deleteSensorValue,
    createSensorValue,
} from '../services/server-service';


export const getSensor = async (req, res) => {
    try {
        const values = await getSensorValues();
        res.status(200).json(values);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createSensor = async (req, res) => {
    const value = req.body;
    try {
        const newValue = await createSensorValue(value);
        res.status(201).json(newValue);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getSensorInfo = async (req, res) => {
    const { id } = req.params;
    try {
        const value = await getSensorValueInfo(id);
        res.status(200).json(value);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateSensor = async (req, res) => {
    const { id } = req.params;
    const value = req.body;
    try {
        const updatedValue = await updateSensorValue(id, value);
        res.status(200).json(updatedValue);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteSensor = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteSensorValue(id);
        res.status(200).json({ message: 'Value deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


