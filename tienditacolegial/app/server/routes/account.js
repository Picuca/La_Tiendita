var db = require('../database');

exports.getUser = function (req,res) {

    db.connect(function(err, client, done) {
        if(err) {
            console.error('error fetching client from pool', err);
        }
        client.query('SELECT ' +
            'cid, cfirst, clast, cemail, ctelephone , ctype, available ' +
            'FROM CUSTOMER ' +
            'WHERE cemail =  $1 ' +
            'AND cpassword = $2 ',[req.query.userEmail, req.query.userPassword] , function(err, result) {

            if(err) {
                done();
                return console.console.error('error on query',err);

            }else {
                //QUERY RESULT
                if(result.rows[0].available == true){
                done();
                return res.send(result.rows[0]);

              }else{
                done();
                return console.console.error('error on query',err);
              }

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

        client.query(
          'INSERT INTO CUSTOMER (cfirst, clast, cpassword, cemail, ctelephone, ctype,available, ccardnumber, ccvv, cexpdate) ' +
          'VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)', [req.query.p1, req.query.p2, req.query.p3,
                req.query.p4, req.query.p5, 'user','true',req.query.p6,req.query.p7,req.query.p8], function(err, result) {


            if(err) {
              done();
                return console.error('error running query', err);
            }else{

              client.query(
                'SELECT cid, cfirst, clast, cemail, ctelephone , ctype ' +
                'FROM CUSTOMER ' +
                'WHERE cemail = $1',[req.query.p4],function(err, result){
                  done();

                  if(err){
                    return console.error('error running query');
                  }

                  res.send(result.rows[0]);

                });

            }
        });

    });

    db.on('error', function (err, client) {
        console.error('idle client error', err.message, err.stack)
    });
}
