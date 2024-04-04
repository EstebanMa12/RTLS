const { Router } = require("express");

const UserRoutes = Router();

const {
    createUser,
    getUser,
    getUserInfo,
    updateUser,
    deleteUser,
} = require("../../controllers/user-controller");

UserRoutes.get('/user/', getUser);
UserRoutes.post('/user/create', createUser);
UserRoutes.get('/user/:id', getUserInfo);
UserRoutes.patch('/user/update/:id', updateUser);
UserRoutes.delete('/user/delete/:id', deleteUser);

module.exports =  UserRoutes;