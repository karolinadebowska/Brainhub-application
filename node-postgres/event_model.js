require('dotenv').config();

const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.REACT_APP_USER,
  host: process.env.REACT_APP_HOST,
  database: process.env.REACT_APP_DATABASE,
  password: process.env.REACT_APP_PASSWORD,
  port: process.env.REACT_APP_PORT_DB
});

const getEvents = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM public.events ORDER BY id ASC', (error, results) => {
      if (error)
        reject(error)
      resolve(results.rows);
    })
  })
}

const createEvent = (body) => {
  return new Promise(function(resolve, reject) {
    const { name, surname, email, eventDate } = body;
    pool.query('INSERT INTO public.events (name, surname, email, date) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, surname, email, eventDate], (error, results) => {
      if (error) {
        console.log(error);
        reject(error);
      }
      else
        resolve(results.rows[0]);
    })
  })
}

module.exports = {
  createEvent,
  getEvents
}