require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { connect_to_db } = require('./lib/mongo');
const { api_router } = require('./api/v1');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/v1', api_router);

const port = process.env.PORT;
connect_to_db(() => {
    app.listen(port, () => {
        console.log(`API server running at http://localhost:${port}`);
    });
});
