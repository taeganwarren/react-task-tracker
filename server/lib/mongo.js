const Mongoose = require('mongoose');

const mongo_host = process.env.MONGO_HOST;
const mongo_port = process.env.MONGO_PORT;
const mongo_db_name = process.env.MONGO_DATABASE;

const mongo_url = `mongodb://${mongo_host}:${mongo_port}/${mongo_db_name}`;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

exports.connect_to_db = async (callback) => {
    console.log('Connecting to database...');
    try {
        Mongoose.connect(mongo_url, options);
    } catch (e) {
        console.log(e);
        process.exit();
    }
    const db = Mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('Successfully connected to database');
        callback();
    });
};
