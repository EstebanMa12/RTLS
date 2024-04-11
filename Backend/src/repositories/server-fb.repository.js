const { db, auth } = require("../config/database/firebase/firebaseConfig");

const collectionName = "users";

const createUserInCollection = async (uid, data) => {
    try {
        const docRef = db.collection(collectionName).doc(uid);
        await docRef.set(data);
        return { 
            id: docRef.id,
            ...data
        };
    } catch (error) {
        console.log(error);
        return false
    }
}

const getUserFromCollection = async (uid) => {
    try {
        const docRef = db.collection(collectionName).doc(uid);
        const doc = await docRef.get();
        if (doc.exists()) {
            return {
                id: doc.id,
                ...doc.data()
            };
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

const loginFromFirestore = async (userData) => {
    try {
        let userLogged = await getUserFromCollection(userData.uid);
        if (userLogged) {
            return userLogged;
        } else {
        const newUser = {
            name: userData.name,
            accessToken: userData.accessToken,
        };
        await createUserInCollection(userData.uid, newUser);
        return {
            id: userData.uid,
            ...newUser,
        };
        }
    } catch (error) {
        console.warn(error);
        return false;
    }
};

const getEmailsFromFirestore = async () => {
    try {
        const querySnapshot = await db.collection(collectionName).get();
        return querySnapshot.docs.map((doc) => doc.data().email);
    } catch (error) {
        console.warn(error);
        return false;
    }
}

const getUserByEmailFromFirestore = async (email) => {
    try {
        const querySnapshot = await db.collection(collectionName).get();
        const user = querySnapshot.docs.find((doc) => doc.data().email === email);
        if (user) {
            return {
            id: user.id,
            ...user.data(),
            };
        } else {
            return null;
        }
        } catch (error) {
        console.warn(error);
        return false;
    }
}

const updateUserInCollection = async (uid, data) => {
    try {
        const docRef = db.collection(collectionName).doc(uid);
        await docRef.set(data, { merge: true });
        return {
            id: docRef.id,
            ...data
        };
    } catch (error) {
        console.log(error);
        return false;
    }
}

const deleteUserFromCollection = async (email) => {
    try {
        // Realiza una consulta para encontrar el documento con el correo electrónico especificado
        const querySnapshot = await db.collection(collectionName).where('email', '==', email).get();
        
        // Verifica si se encontró el documento
        if (!querySnapshot.empty) {
            // Obtiene el primer documento que coincide con el correo electrónico
            const docRef = querySnapshot.docs[0].ref;
            // Elimina el documento
            await docRef.delete();
            await auth.deleteUser(docRef.id);
            return true;
        } else {
            console.log('No se encontró el usuario con el correo electrónico proporcionado.');
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = {
    createUserInCollection,
    loginFromFirestore,
    getEmailsFromFirestore,
    getUserByEmailFromFirestore,
    updateUserInCollection,
    deleteUserFromCollection
}

