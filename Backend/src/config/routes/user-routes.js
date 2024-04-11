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

// Estas rutas aún quedan en versión experimental, ya que como se esta utilizando firebase del lado del servidor, aun no encuentro la forma para poder hacer un login y logout de manera correcta
// UserRoutes.post("/login", login);
// UserRoutes.post("/logout", logoutController);

module.exports =  UserRoutes;