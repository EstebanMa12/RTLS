import { Router } from "express";

const router = Router();

import { 
    getSensor,
    createSensor,
    getSensorInfo,
    updateSensor,
    deleteSensor,
  } from "../../controllers/server-controller";

router.get('/sensor/', getSensor);
router.post('/sensor/create', createSensor);
router.get('/sensor/:id', getSensorInfo);
router.patch('/sensor/update/:id', updateSensor);
router.delete('/sensor/delete/:id', deleteSensor);

export default router;
