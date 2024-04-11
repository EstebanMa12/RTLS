const { Router } = require("express");

const UserRoutes = Router();

const {
    getUserController,
    updateUserController,
    deleteUserController,
    getUsersController,
    register,
    login,
    logoutController,
} = require("../../controllers/user-controller");

UserRoutes.get("/users", getUsersController);
UserRoutes.get("/user/:email", getUserController);
UserRoutes.put("/user/:email", updateUserController);
UserRoutes.delete("/user/:email", deleteUserController);
UserRoutes.post("/register", register);
UserRoutes.post("/login", login);
UserRoutes.post("/logout", logoutController);

module.exports =  UserRoutes;