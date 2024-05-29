
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

const calculateUsageStatistics = async () => {
    try {
        const currentTimestamp = new Date();
        const startOfHour = new Date(currentTimestamp);
        startOfHour.setMinutes(0, 0, 0); // Inicio de la hora actual
        const endOfHour = new Date(startOfHour);
        endOfHour.setHours(endOfHour.getHours() + 1, 0, 0, -1); // Fin de la hora actual

        const values = await SensorDB.find({
            date: {
                $gte: startOfHour.toISOString(),
                $lte: endOfHour.toISOString()
            }
        });

        let activeTime = 0;
        let inactiveTime = 0;

        values.forEach((entry) => {
            if (entry.movement) {
                activeTime += 20; // Incrementar tiempo activo por 20 segundos
            } else {
                inactiveTime += 20; // Incrementar tiempo inactivo por 20 segundos
            }
        });

        return { activeTime: activeTime / 60, inactiveTime: inactiveTime / 60 };

    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}



const getDailyUsageStatistics = async (startDate, endDate) => {
    try {
        const startOfDay = new Date(`${startDate}T00:00:00.000Z`);
        const endOfDay = new Date(`${endDate}T23:59:59.999Z`);

        const values = await SensorDB.find({
            date: {
                $gte: startOfDay,
                $lte: endOfDay
            }
        });

        const dailyStats = {};
        values.forEach((entry) => {
            const date = entry.date.toISOString().split('T')[0]; // Extraer la fecha
            if (!dailyStats[date]) {
                dailyStats[date] = { activeTime: 0, inactiveTime: 0 };
            }
            if (entry.movement) {
                dailyStats[date].activeTime += 20;
            } else {
                dailyStats[date].inactiveTime += 20;
            }
        });

        for (const date in dailyStats) {
            dailyStats[date].activeTime /= 60;
            dailyStats[date].inactiveTime /= 60;
        }

        return dailyStats;

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

const generateCompleteUsageReport = async (startDate, endDate) => {
    try {
        const dailyStats = await getDailyUsageStatistics(startDate, endDate);
        const currentStats = await calculateUsageStatistics();

        return { dailyStats, currentStats };

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
            return {values: await SensorDB.find(), buttons: await ButtonDB.find()}
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
        const values = await SensorDB.find().sort({ date: -1 }).limit(2);
        const buttons = await ButtonDB.find().sort({ date: -1 }).limit(2);

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

const calculateHourlyAverages = (values ) => {
    try {

        if (!values.length) {
            return { averageActiveTime: 0, averageInactiveTime: 0 };
        }

        const hourlyStats = {};
        values.forEach((entry) => {
            const hour = new Date(entry.date).toISOString().substring(0, 13); // Extract hour part

            if (!hourlyStats[hour]) {
                hourlyStats[hour] = { activeTime: 0, inactiveTime: 0, count: 0 };
            }

            if (entry.movement) {
                hourlyStats[hour].activeTime += 20;
            } else {
                hourlyStats[hour].inactiveTime += 20;
            }

            hourlyStats[hour].count += 1;
        });

        let totalActiveTime = 0;
        let totalInactiveTime = 0;
        let totalHours = 0;

        for (const hour in hourlyStats) {
            totalActiveTime += hourlyStats[hour].activeTime;
            totalInactiveTime += hourlyStats[hour].inactiveTime;
            totalHours += 1;
        }

        const averageActiveTime = totalActiveTime / (totalHours * 60);
        const averageInactiveTime = totalInactiveTime / (totalHours * 60);

        return { averageActiveTime, averageInactiveTime };
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
};


const sensorValues = async (page, pageSize) => {
    try {
        const values = await SensorDB.find().sort({ date: 1 });
        const { averageActiveTime, averageInactiveTime } = calculateHourlyAverages(values);

        const paginatedValues = page && pageSize
            ? values.slice((page - 1) * pageSize, page * pageSize)
            : values;

        return {
            paginatedValues,
            averageActiveTime,
            averageInactiveTime
        };
    }
    catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}

const buttonValues = async (page, pageSize) => {
    try {
        const buttons = await ButtonDB.find().sort({ date: 1 });
        const { averageActiveTime, averageInactiveTime } = calculateHourlyAverages(buttons);

        const paginatedButtons = page && pageSize
            ? buttons.slice((page - 1) * pageSize, page * pageSize)
            : buttons;

        return {
            paginatedButtons,
            averageActiveTime,
            averageInactiveTime
        };
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
    deleteButton,
    sensorValues,
    buttonValues,
    generateCompleteUsageReport,
}



