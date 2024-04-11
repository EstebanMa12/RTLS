const {
    createUserInCollection,
    loginFromFirestore,
    getEmailsFromFirestore,
    getUserByEmailFromFirestore,
    updateUserInCollection,
    deleteUserFromCollection
} = require("../repositories/server-fb.repository");



const {auth, admin} = require("../config/database/firebase/firebaseConfig");

// The firebase database will be used to manage the users in the web app 

const createUser = async (userData) => {
    try {
        const userRecord = await auth.createUser({
            email: userData.email,
            emailVerified: false,
            password: userData.password,
            displayName: userData.name,
            disabled: false
        });
        const accessToken = await auth.createCustomToken(userRecord.uid);
        const userDoc = await createUserInCollection(userRecord.uid, {
            name: userData.name,
            email: userData.email,
            accessToken: accessToken
        });
        return {
            uid: userRecord.uid,
            name: userData.name,
            accessToken: userDoc.accessToken
        };


    } catch (error) {
        console.log(error);
        return false;
    }
}

const getUsers = async () => {
    return await getEmailsFromFirestore();
}

const getUserInfo = async (email) => {
    return await getUserByEmailFromFirestore(email);
}

const updateUser = async (uid, userData) => {
    try {
        // Actualizar los datos del usuario en la autenticación
        await auth.updateUser(uid, userData);

        // Actualizar los datos del usuario en la colección Firestore u otros servicios
        return await updateUserInCollection(uid, userData);
    } catch (error) {
        console.log(error);
        return false;
    }
}

const deleteUser = async (email) => {
    return await deleteUserFromCollection(email);
}

const loginWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await admin.auth().signInWithEmailAndPassword(email, password);
        return await loginFromFirestore({
            uid: userCredential.user.uid,
            name: userCredential.user.displayName,
            accessToken: userCredential.user.accessToken
        });
    } catch (error) {
        console.log(error);
        return false;
    }
}

const logout = async () => {
    try {
        await signOut(auth);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserInfo,
    updateUser,
    deleteUser,
    loginWithEmailAndPassword,
    logout
}