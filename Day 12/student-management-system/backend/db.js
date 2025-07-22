// backend/db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

pool.on('connect', () => {
    console.log('Connected to PostgreSQL DB!!');
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle DB client', err);
});

module.exports = pool;
