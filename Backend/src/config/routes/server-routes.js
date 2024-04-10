const { Router } = require("express");

const ServerRoutes = Router();

const { 
    getSensor,
    createSensor,
    updateSensor,
    deleteSensor,
    getSensorByDate,
    getSensorByHour,
    getSensorByHourRange,
    getSensorByDateRange
  } = require("../../controllers/server-controller");

ServerRoutes.get('/sensor/', getSensor);
ServerRoutes.post('/sensor/create', createSensor);
ServerRoutes.patch('/sensor/update/:id', updateSensor);
ServerRoutes.delete('/sensor/delete/:id', deleteSensor);
ServerRoutes.get('/sensor/date/:date', getSensorByDate);
ServerRoutes.get('/sensor/hour/:hour', getSensorByHour);
ServerRoutes.get('/sensor/hour/:startHour/:endHour', getSensorByHourRange);
ServerRoutes.get('/sensor/date/:startDate/:endDate', getSensorByDateRange);

module.exports = ServerRoutes;
