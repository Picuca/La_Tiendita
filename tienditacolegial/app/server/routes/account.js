var db = require('../database');

exports.getUser = function (req,res) {

    db.connect(function(err, client, done) {
        if(err) {
            console.error('error fetching client from pool', err);
        }
        client.query('SELECT ' +
            'cid, cfirst, clast, cemail, ctelephone , ctype ' +
            'FROM CUSTOMER ' +
            'WHERE cemail =  $1 ' +
            'AND cpassword = $2 ',[req.query.userEmail, req.query.userPassword] , function(err, result) {

            if(err) {
                done();
                return console.console.error('error on query',err);

            }else {
                //QUERY RESULT
                done();
                return res.send(result.rows[0]);

            }
        });
    });

    db.on('error', function (err, client) {
        console.error('idle client error', err.message, err.stack)
    });
};


exports.addUser = function (req, res) {

    db.connect(function(err, client, done) {
        if(err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('SELECT $1::int AS SOLUTION', ['1'], function(err, result) {
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
