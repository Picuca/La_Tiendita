var db = require('../database');


exports.editInfo = function (req, res) {

    db.connect(function(err, client, done) {
        if(err) {
            return console.error('error fetching client from pool', err);
        }

        var field = req.query.p3;

        client.query(
          'UPDATE CUSTOMER ' +
          'SET ' + field + ' = $1 '+
          'WHERE cid = $2', [req.query.p1, req.query.p2], function(err, result) {
            done();

            if(err) {
                return console.error('error running query', err);
            }

            res.send(result.rows);
        });
    });

    db.on('error', function (err, client) {
        console.error('idle client error', err.message, err.stack)
    });
}

exports.deleteUser = function(){
  db.connect(function(err, client, done) {
      if(err) {
          return console.error('error fetching client from pool', err);
      }

      var field = req.query.p3;

      client.query(
        'UPDATE CUSTOMER ' +
        'SET available = false ' +
        'WHERE cemail = $1', [req.query.p1], function(err, result) {
          done();

          if(err) {
              return console.error('error running query', err);
          }

          res.send(result.rows);
      });
  });

  db.on('error', function (err, client) {
      console.error('idle client error', err.message, err.stack)
  });
}


exports.editCard = function (req, res) {

    db.connect(function(err, client, done) {
        if(err) {
            return console.error('error fetching client from pool', err);
        }

        client.query(
          'UPDATE CUSTOMER ' +
          'SET ccardnumber = $1 ' +
          'SET ccvv = $2 '+
          'SET cexpdate = $3 ' +
          'WHERE cid = $4', [req.query.p1, req.query.p2,req.query.p3,req.query.p4], function(err, result) {
            done();

            if(err) {
                return console.error('error running query', err);
            }

            res.send(result.rows);
        });
    });

    db.on('error', function (err, client) {
        console.error('idle client error', err.message, err.stack)
    });
}
