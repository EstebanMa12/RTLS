
const { ValuesDB, ButtonDB } = require("../models/values.model");


const getValues = async () => {
    try {
        return ValuesDB.find();
    }catch (error){
        console.log(error)
    }
}

const getValuesByDate = async (date) => {
    try {
        if (!date) {
            return ValuesDB.find();
        }
        
        const startOfDay = `${date}T00:00:00.000Z`;
        const endOfDay = `${date}T23:59:59.999Z`;

        return ValuesDB.find({
            date: {
                $gte: startOfDay,
                $lte: endOfDay
            }
        });
    } catch (error) {
        console.log(error);
    }
}

const getValuesByHour = async (hour) => {
    try {
        if (!hour) {
            return ValuesDB.find();
        }
        const date = new Date(); // Obtiene la fecha actual
        date.setHours(hour - 5); // Establece la hora especificada
        date.setMinutes(0); // Establece los minutos a 0
        date.setSeconds(0); // Establece los segundos a 0
        date.setMilliseconds(0); // Establece los milisegundos a 0

        const startOfHour = new Date(date.getTime()); // Inicio de la hora
        const endOfHour = new Date(date.getTime() + 3599999); // Fin de la hora (3599999 milisegundos = 59 minutos y 59.999 segundos)
        console.log(date)
        return ValuesDB.find({
            date: {
                $gte: startOfHour,
                $lte: endOfHour
            }
        });
    } catch (error) {
        console.log(error);
    }
}

const getValuesByHourRange = async (startHour, endHour) => {
    try {
        if (!startHour || !endHour) {
            return ValuesDB.find();
        }
        const date = new Date(); // Obtiene la fecha actual
        date.setHours(startHour-5); // Establece la hora especificada
        date.setMinutes(0); // Establece los minutos a 0
        date.setSeconds(0); // Establece los segundos a 0
        date.setMilliseconds(0); // Establece los milisegundos a 0

        const startOfHour = new Date(date.getTime()); // Inicio de la hora

        date.setHours(endHour-5); // Establece la hora especificada
        date.setMinutes(59); // Establece los minutos a 59
        date.setSeconds(59); // Establece los segundos a 59
        date.setMilliseconds(999); // Establece los milisegundos a 999

        const endOfHour = new Date(date.getTime()); // Fin de la hora



        return ValuesDB.find({
            date: {
                $gte: startOfHour,
                $lte: endOfHour
            }
        });
    } catch (error) {
        console.log(error);
    }
}

const getValuesByDateRange = async (startDate, endDate) => {
    try {
        if (!startDate || !endDate) {
            return ValuesDB.find();
        }
        
        const startOfDay = `${startDate}T00:00:00.000Z`;
        const endOfDay = `${endDate}T23:59:59.999Z`;

        return ValuesDB.find({
            date: {
                $gte: startOfDay,
                $lte: endOfDay
            }
        });
    } catch (error) {
        console.log(error);
    }
}

const createRecord = async (value, state) => {
    try {
        ButtonDB.create(state);
        return ValuesDB.create(value);
    }catch (error){
        console.log(error)
    }
}


// Update
const updateValue = async (id, value) => {
    try {
        return ValuesDB.findByIdAndUpdate
        (id, value, {new: true});
    }
    catch (error){
        console.log(error)
    }
}

// Delete
const deleteValue = async (id) => {
    try {
        return ValuesDB.findByIdAndDelete(id);
    }
    catch (error){
        console.log(error)
    }
}

module.exports = {
    createRecord,
    getValues,
    updateValue,
    deleteValue,
    getValuesByDate,
    getValuesByHour,
    getValuesByHourRange,
    getValuesByDateRange
}



