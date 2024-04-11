const { db } = require("../config/database/firebase/firebaseConfig");

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
        const docRef = doc(db, collectionName, uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return {
                id: docSnap.id,
                ...docSnap.data()
            };
        } else {
            return false;
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
        const querySnapshot = await getDocs(collection(db, collectionName));
        const emails = querySnapshot.docs.map((doc) => doc.data().email);
        return emails;
    } catch (error) {
        console.warn(error);
        return false;
    }
}

const getUserByEmailFromFirestore = async (email) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
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
        const docRef = doc(db, collectionName, uid);
        await setDoc(docRef, data, { merge: true });
        return {
            id: docRef.id,
            ...data
        };
    } catch (error) {
        console.log(error);
        return false;
    }
}

const deleteUserFromCollection = async (uid) => {
    try {
        const docRef = doc(db, collectionName, uid);
        await setDoc(docRef, { active: false }, { merge: true });
        return true;
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

