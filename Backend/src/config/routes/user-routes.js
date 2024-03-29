import { Router } from "express";

const UserRoutes = Router();

import {
    createUser,
    getUser,
    getUserInfo,
    updateUser,
    deleteUser,
} from "../../controllers/user-controller";

UserRoutes.get('/user/', getUser);
UserRoutes.post('/user/create', createUser);
UserRoutes.get('/user/:id', getUserInfo);
UserRoutes.patch('/user/update/:id', updateUser);
UserRoutes.delete('/user/delete/:id', deleteUser);

export default UserRoutes;