var db = require('../database');


exports.getTransactions = function (req, res) {

    db.connect(function(err, client, done) {
        if(err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('SELECT * FROM TRANSACTIONS WHERE cid = $1', [req.query.p1], function(err, result) {
            done();

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
