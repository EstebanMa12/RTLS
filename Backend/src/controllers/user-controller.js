import {
    createUser,
    getUsers,
    getUserInfo,
    updateUser,
    deleteUser
} from '../services/user-service';

export const getUser = async (req, res) => {
    try {
        const values = await getUsers();
        res.status(200).json(values);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    const value = req.body;
    try {
        const newValue = await createUser(value);
        res.status(201).json(newValue);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getUserInfo = async (req, res) => {
    const { id } = req.params;
    try {
        const value = await getUserInfo(id);
        res.status(200).json(value);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const value = req.body;
    try {
        const updatedValue = await updateUser(id, value);
        res.status(200).json(updatedValue);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteUser(id);
        res.status(200).json({ message: 'Value deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}