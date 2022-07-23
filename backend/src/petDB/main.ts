import express from 'express';

import { connection } from '../database/utils';
import { Pet } from '../types';

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
/**
 * create table animal (
  pet_id int not null auto_increment,
  shelter_id int not null,
  intake_date date,
  found_lat float,
  found_lng float,
  age_at_intake int,
  primary_breed varchar(30),
  furr_color varchar(30),
  eye_color varchar(30),
  altered varchar(3),
  constraint pk_pet primary key (pet_id)
);
 */
router.post('/pet', (req, res) => {
 const {
  shelter_id,
  intake_date,
  found_lat,
  found_lng,
  age_at_intake,
  primary_breed,
  furr_color,
  eye_color,
  altered,
 } = req.body as Pet;

 connection.query(
  'insert into animal (shelter_id, intake_date, found_lat, found_lng, age_at_intake, primary_breed, furr_color, eye_color, altered) values (?, ?, ?, ?, ?, ?, ?, ?, ?)',
  [
   shelter_id,
   intake_date,
   found_lat,
   found_lng,
   age_at_intake,
   primary_breed,
   furr_color,
   eye_color,
   altered,
  ],
  (err, results) => {
   if (err) {
    return res.status(400).send({
     message: err.message,
    });
   }
   return res.status(200).send(results);
  }
 );
});
router.delete('/pet', (req, res) => {
 const { pet_id } = req.body as { pet_id: number };
 connection.query('delete from animal where pet_id = ?', [pet_id], (err, results) => {
  if (err) {
   return res.status(400).send({
    message: err.message,
   });
  }
  return res.status(200).send(results);
 });
});
router.patch('/pet', (req, res) => {
 const {
  shelter_id,
  intake_date,
  found_lat,
  found_lng,
  age_at_intake,
  primary_breed,
  furr_color,
  eye_color,
  altered,
 } = req.body as Pet;

 connection.query(
  'update animal set shelter_id = ?, intake_date = ?, found_lat = ?, found_lng = ?, age_at_intake = ?, primary_breed = ?, furr_color = ?, eye_color = ?, altered = ? where pet_id = ?',
  [
   shelter_id,
   intake_date,
   found_lat,
   found_lng,
   age_at_intake,
   primary_breed,
   furr_color,
   eye_color,
   altered,
  ],
  (err, results) => {
   if (err) {
    return res.status(400).send({
     message: err.message,
    });
   }
   return res.status(200).send(results);
  }
 );
});

router.post('/missing-pets', (req, res) => {
 const {
  shelter_id,
  intake_date,
  found_lat,
  found_lng,
  age_at_intake,
  primary_breed,
  furr_color,
  eye_color,
  altered,
 } = req.body as Pet;

 connection.query(
  'insert into missingAnimal (shelter_id, intake_date, found_lat, found_lng, age_at_intake, primary_breed, furr_color, eye_color, altered) values (?, ?, ?, ?, ?, ?, ?, ?, ?)',
  [
   shelter_id,
   intake_date,
   found_lat,
   found_lng,
   age_at_intake,
   primary_breed,
   furr_color,
   eye_color,
   altered,
  ],
  (err, results) => {
   if (err) {
    return res.status(400).send({
     message: err.message,
    });
   }
   return res.status(200).send(results);
  }
 );
});

router.delete('/missing-pets', (req, res) => {
 const { pet_id } = req.body as { pet_id: number };
 connection.query('delete from missingAnimal where pet_id = ?', [pet_id], (err, results) => {
  if (err) {
   return res.status(400).send({
    message: err.message,
   });
  }
  return res.status(200).send(results);
 });
});

router.get('/missing-pets', (_, res) => {
 connection.query('select * from missingAnimal', (err, results) => {
  if (err) {
   return res.status(400).send({
    message: err.message,
   });
  }
  return res.status(200).send(results);
 });
});

export default router;
