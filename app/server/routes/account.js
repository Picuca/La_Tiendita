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

            if(result.rows == 0) {
                done();
                return 'error';

            }else {
                //QUERY RESULT
                console.log(result.rows[0]);
                done();
                return res.send(result.rows[0]);

            }
        });
    });

    db.on('error', function (err, client) {
        console.error('idle client error', err.message, err.stack)
    });
};
