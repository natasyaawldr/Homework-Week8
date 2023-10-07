const express = require('express');
const router = express.Router();
const pool = require('../queries.js');

router.get('/category', (req, res) => {
    pool.query('SELECT * FROM category', (err, result) => {
        if(err){
            throw err;
        }
        res.send(result);
    })
});

router.get('/category/:name', (req, res) => {
    const filmByCategory = req.params.name

    pool.query(`SELECT * FROM film JOIN film_category fc ON film.film_id = fc.film_id JOIN category c ON fc.category_id = c.category_id WHERE c.name  = $1`, 
    [filmByCategory],
    (err, result) => {
        if(err){
            throw err;
        }
        res.send(result);
    })  
});



module.exports = router