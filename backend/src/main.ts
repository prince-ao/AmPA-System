import 'dotenv/config';
import express from 'express';
import { connection } from './database/utils';
import petDB from './petDB/main';

const PORT = 9090;
const app = express();

app.get('/', (_, res) => {
 res.status(200).send('Welcome to AmPA System API');
});

app.use('/pets', petDB);

app.listen(PORT, () => {
 console.log(`listening on port ${PORT}`);
 connection.connect();
 console.log('connected to database.');
});
