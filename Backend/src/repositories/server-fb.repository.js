import { db } from "../config/database/firebase/firebaseConfig";

export const createServer = async (server) => {
    try {
        const serverRef = await addDoc(collection(db, "servers"), server);
        return serverRef.id;
    } catch (error) {
        console.error("Error adding document: ", error);
        return error;
    }
    };