
const { SensorDB, ButtonDB } = require("../models/values.model");

const createRecord = async (data) => {
    try {
        const { movementState, buttonState } = data;
        const movementEntry = new SensorDB({ movement: movementState });
        const stateEntry = new ButtonDB({ state: buttonState });

        await movementEntry.save();
        await stateEntry.save();
        return { movementEntry, stateEntry };
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}

const calculateUsageStatistics = async (startDate, endDate) => {
    try {
        if (!startDate || !endDate) {
            return SensorDB.find();
        }

        const startOfDay = `${startDate}T00:00:00.000Z`;
        const endOfDay = `${endDate}T23:59:59.999Z`;

        const values = SensorDB.find({
            date: {
                $gte: startOfDay,
                $lte: endOfDay
            }
        });
        let activeTime = 0;
        let inactiveTime = 0;
        values.forEach((entry, index) => {
            if (entry.movement) {
                activeTime += 20;
            } else {
                inactiveTime += 20;
            }
        })

        return { activeTime: activeTime / 60, inactiveTime: inactiveTime / 60 };


    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}

const generateUsageReport = async (startDate, endDate) => {
    try {
        if (!startDate || !endDate) {
            return SensorDB.find();
        }
        const usageStats = calculateUsageStatistics(startDate, endDate);

        return {
            starDate,
            endDate,
            activeTime: usageStats.activeTime,
            inactiveTime: usageStats.inactiveTime,
            usagePercentage: (usageStats.activeTime / (usageStats.activeTime + usageStats.inactiveTime)) * 100
        }

    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}

const checkForAlerts = async () => {
    try {
        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        const usageStats = calculateUsageStatistics(startOfDay, endOfDay);

        if (usageStats.inactiveTime > 60 * 4) {
            return { alert: true, message: 'No se ha detectado movimiento en las últimas 4 horas' };
        }
        return { alert: false, message: 'No hay alertas' };
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}
const getValuesByDate = async (date) => {
    try {
        if (!date) {
            return SensorDB.find();
        }

        const startOfDay = `${date}T00:00:00.000Z`;
        const endOfDay = `${date}T23:59:59.999Z`;

        const values = await SensorDB.find({
            date: {
                $gte: startOfDay,
                $lte: endOfDay
            }
        });

        const buttons = await ButtonDB.find({
            date: {
                $gte: startOfDay,
                $lte: endOfDay
            }
        });

        return { values, buttons };
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}
const getLastValues = async () => {
    try {
        const values = await SensorDB.find().sort({ date: -1 }).limit(1);
        const buttons = await ButtonDB.find().sort({ date: -1 }).limit(1);

        return { values, buttons };
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}

// SENSOR CRUD OPERATIONS
// Update
const updateValue = async (id, value) => {
    try {
        return SensorDB.findByIdAndUpdate
            (id, value, { new: true });
    }
    catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}

// Delete
const deleteValue = async (id) => {
    try {
        return SensorDB.findByIdAndDelete(id);
    }
    catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}

// BUTTON CRUD OPERATIONS
// Update
const updateButton = async (id, value) => {
    try {
        return ButtonDB.findByIdAndUpdate
            (id, value, { new: true });
    }
    catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}

// Delete
const deleteButton = async (id) => {
    try {
        return ButtonDB.findByIdAndDelete(id);
    }
    catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}

module.exports = {
    createRecord,
    updateValue,
    deleteValue,
    getValuesByDate,
    calculateUsageStatistics,
    generateUsageReport,
    checkForAlerts,
    getLastValues,
    updateButton,
    deleteButton
}



