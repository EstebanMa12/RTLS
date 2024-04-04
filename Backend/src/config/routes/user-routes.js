const { Router } = require("express");

const UserRoutes = Router();

const {
    createUserController,
    getUserController,
    getUserInfoController,
    updateUserController,
    deleteUserController,
} = require("../../controllers/user-controller");

UserRoutes.get('/user/', getUserController);
UserRoutes.post('/user/create', createUserController);
UserRoutes.get('/user/:id', getUserInfoController);
UserRoutes.patch('/user/update/:id', updateUserController);
UserRoutes.delete('/user/delete/:id', deleteUserController);

module.exports =  UserRoutes;