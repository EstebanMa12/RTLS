import { Router } from "express";

const router = Router();

import {
    createUser,
    getUser,
    getUserInfo,
    updateUser,
    deleteUser,
} from "../../controllers/user-controller";

router.get('/user/', getUser);
router.post('/user/create', createUser);
router.get('/user/:id', getUserInfo);
router.patch('/user/update/:id', updateUser);
router.delete('/user/delete/:id', deleteUser);

export default router;