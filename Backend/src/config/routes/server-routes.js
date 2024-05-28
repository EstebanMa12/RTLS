const { Router } = require("express");

const ServerRoutes = Router();

const {
  getSensor,
  createSensor,
  updateSensor,
  deleteSensor,
  getSensorByDate,
  generateReport,
  stats,
  alerts,
  updateButton,
  deleteButton
} = require("../../controllers/server-controller");

ServerRoutes.get('/sensor/', getSensor);
ServerRoutes.post('/sensor/create', createSensor);
ServerRoutes.patch('/sensor/update/:id', updateSensor);
ServerRoutes.delete('/sensor/delete/:id', deleteSensor);
ServerRoutes.get('/sensor/date/:date', getSensorByDate);
ServerRoutes.get('/sensor/report/:startDate/:endDate', generateReport);
ServerRoutes.get('/sensor/stats/:startDate/:endDate', stats);
ServerRoutes.get('/sensor/alerts', alerts);
ServerRoutes.patch('/sensor/button/:id', updateButton);
ServerRoutes.delete('/sensor/button/:id', deleteButton);
module.exports = ServerRoutes;
