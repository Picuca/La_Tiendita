var express = require('express');
var router = express.Router();
var pg = require('../database');

/* GET home page. */
router.get('/account', function(req, res) {
  pg.connect(function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT * FROM CUSTOMER', function(err, result) {
      done();

      if(err) {
        return console.error('error running query', err);
      }
      res.send(result.rows[0]);
      console.log(result.rows);
    });
  });

  pg.on('error', function (err, client) {
    console.error('idle client error', err.message, err.stack)
  });

});

router.post('/account', function (req, res) {

  console.log('POST PERFORMED');

});

module.exports = router;
