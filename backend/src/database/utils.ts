import mysql from 'mysql';

export const connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: process.env.DB_PASS,
 database: 'ampa_system',
});
