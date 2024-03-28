import mongoose from 'mongoose';

const configDB = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}

export const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, configDB);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
    }
}

export const disconnect = async () => {
    try {
        await mongoose.disconnect();
        console.log('MongoDB disconnected');
    } catch (error) {
        console.error('Error disconnecting from MongoDB: ', error);
    }
}
