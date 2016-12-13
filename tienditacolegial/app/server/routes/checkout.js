var db = require('../database');

exports.postDBUpdate = function (req, res) {



    db.connect(function(err, client, done) {
        if(err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('insert into transactions (cid, tdate,totalprice) values($1,$2,$3) ', [req.query.p1, new Date(),req.query.p3], function(err, result) {
            done();

            if(err) {
                return console.error('error running query', err);
            }

        });

        var transactionID = [];

        client.query('SELECT orderid FROM transactions ORDER BY orderid DESC LIMIT 1',
        function(err, result) {
                    done();

                    transactionID = result.rows[0];






                    if(err) {
                        return console.error('error running query', err);
                    }

                    res.send(result);
                });





    });

    db.on('error', function (err, client) {
        console.error('idle client error', err.message, err.stack)
    });



}