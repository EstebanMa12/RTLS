const {
    createUser,
    getUsers,
    getUserInfo,
    updateUser,
    deleteUser,
    loginWithEmailAndPassword,
    logout
} = require('../services/user-service');

const register = async (req, res) => {
    const userData = req.body;
    const user = await createUser(userData);
    if (user) {
        res.status(201).json(user);
    } else {
        res.status(400).json({ message: 'Error registering user' });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await loginWithEmailAndPassword(email, password);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(401).json({ message: 'Error logging in' });
    }
}

const logoutController = async (req, res) => {
    const result = await logout();
    if (result) {
        res.status(200).json({ message: 'Logged out' });
    } else {
        res.status(400).json({ message: 'Error logging out' });
    }
}

const getUsersController = async (req, res) => {
    const users = await getUsers();
    if (users) {
        res.status(200).json(users);
    } else {
        res.status(400).json({ message: 'Error getting users' });
    }
}

const getUserController = async (req, res) => {
    const { email } = req.params;
    const user = await getUserInfo(email);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(400).json({ message: 'Error getting user' });
    }
}

const updateUserController = async (req, res) => {
    const { email } = req.params;
    const userData = req.body;
    const docRef = await getUserInfo(email);
    const user = await updateUser(docRef.id, userData);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(400).json({ message: 'Error updating user' });
    }
}

const deleteUserController = async (req, res) => {
    const { email } = req.params;
    const result = await deleteUser(email);
    if (result) {
        res.status(200).json({ message: 'User deleted' });
    } else {
        res.status(400).json({ message: 'Error deleting user' });
    }
}

module.exports = {
    getUserController,
    updateUserController,
    deleteUserController,
    getUsersController,
    register,
    login,
    logoutController,
}