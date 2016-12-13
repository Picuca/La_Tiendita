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




        client.query('SELECT orderid FROM transactions ORDER BY orderid DESC LIMIT 1',
        function(err, result) {
                    done();

                    transactionID = result.rows[0].orderid;


                    for( var i = 0; i < req.query.p2.length; i++){

                      var itemid = req.query.p2[i];

                        client.query('insert into itemordered (orderid, itemid) values($1,$2)'                                 ,[transactionID, itemid], function(err,  result) {
                                        done();

                                        if(err) {
                                            return console.error('error running query', err);
                                        }

                                    });

                    }



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