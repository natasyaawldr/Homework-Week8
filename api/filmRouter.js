const express = require('express');
const router = express.Router();
const pool = require('../queries.js');

//Menampilkan data seluruh list film
router.get('/film', (req, res) => {
    pool.query('SELECT * FROM film', (err, result) => {
        if(err){
            throw err;
        }
        res.send(result);
    })
});

//Menampilkan data film tertentu berdasarkan id
router.get('/film/:film_id', (req, res) => {
    const filmById = req.params.film_id;

    pool.query(`SELECT * FROM film WHERE film_id = $1`, [filmById], (err, result) => {
        if(err){
            throw err;
        }
        res.send(result);
    })
});

module.exports = router; 