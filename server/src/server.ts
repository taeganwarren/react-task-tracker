if (process.env.PROJ_ENV === 'development') { require('dotenv').config(); }

import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

import { connect_to_db } from './lib/mongo';
import { router } from './api/v1/index';

const app = express();
app.use(express.json());
if (process.env.PROJ_ENV === 'development') { app.use(morgan('dev')); }
app.use(cors());
app.use('/api/v1', router);

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
connect_to_db(() => {
    app.listen(port, () => {
        console.log(`API server running at http://localhost:${port}`);
    });
});
