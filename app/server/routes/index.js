var express = require('express');
var router = express.Router();
var pg = require('../database');

/* GET home page. */
router.get('/account', function(req, res) {
  pg.query('SELECT $1::int AS number', ['1'], function (err, result) {
    console.log('I did it');

    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].number);
    //output: 1
  });
});

router.post('/account', function (req, res, next) {
  pg.query('SELECT * FROM CUSTOMER', function (err, result) {
    res.send(result);
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].number);
    //output: 1
  });
});

module.exports = router;
