import express from 'express';
import { connection } from '../database/utils';

const router = express.Router();

router.get('/get-all', (_, res) => {
 connection.query('select * from animal', (err, results) => {
  if (err) {
   return res.status(400).send({
    message: err.message,
   });
  }
  return res.status(200).send(results);
 });
});

export default router;
