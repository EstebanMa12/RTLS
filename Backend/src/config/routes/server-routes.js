const { Router } = require("express");

const ServerRoutes = Router();

const { 
    getSensor,
    createSensor,
    getSensorInfo,
    updateSensor,
    deleteSensor,
  } = require("../../controllers/server-controller");

ServerRoutes.get('/sensor/', getSensor);
ServerRoutes.post('/sensor/create', createSensor);
ServerRoutes.get('/sensor/:id', getSensorInfo);
ServerRoutes.patch('/sensor/update/:id', updateSensor);
ServerRoutes.delete('/sensor/delete/:id', deleteSensor);

module.exports = ServerRoutes;
