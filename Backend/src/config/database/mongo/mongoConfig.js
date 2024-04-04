const mongoose = require('mongoose');


const configDB = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, configDB);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
    }
}

const disconnect = async () => {
    try {
        await mongoose.disconnect();
        console.log('MongoDB disconnected');
    } catch (error) {
        console.error('Error disconnecting from MongoDB: ', error);
    }
}

module.exports = {
    connect,
    disconnect
}