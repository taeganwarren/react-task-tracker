import mongoose from 'mongoose';

const mongo_url = process.env.MONGO_URL + '';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connect_to_db = async (callback: Function) => {
    console.log('Connecting to database...');
    try {
        mongoose.connect(mongo_url, options);
    } catch (e) {
        console.log(e);
        process.exit();
    }
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('Successfully connected to database');
        callback();
    });
};

export {
    connect_to_db
};
