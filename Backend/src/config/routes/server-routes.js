import { Router } from "express";

const ServerRoutes = Router();

import { 
    getSensor,
    createSensor,
    getSensorInfo,
    updateSensor,
    deleteSensor,
  } from "../../controllers/server-controller";

ServerRoutes.get('/sensor/', getSensor);
ServerRoutes.post('/sensor/create', createSensor);
ServerRoutes.get('/sensor/:id', getSensorInfo);
ServerRoutes.patch('/sensor/update/:id', updateSensor);
ServerRoutes.delete('/sensor/delete/:id', deleteSensor);

export default ServerRoutes;
