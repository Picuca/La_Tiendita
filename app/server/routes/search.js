var db = require('../database');


exports.getSearch = function (req, res) {


    db.connect(function(err, client, done) {
        if(err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('SELECT * FROM book' +
<<<<<<< HEAD
        'WHERE itemname LIKE $1',[itemSearchService.get()] ,function(err, result) {
=======
        'WHERE itemname LIKE %$1%',[req.query.item] ,function(err, result) {
>>>>>>> d87ae12f6c5404803606924b1e14491a1c65cc66

            done();

            if(err) {
                return console.error('error running query', err);
            }
            res.send(result.rows);

            console.log(result.rows);
            console.log(itemSearchService.get());
        });
    });

    db.on('error', function (err, client) {
        console.error('idle client error', err.message, err.stack)
    });
<<<<<<< HEAD
}
=======
}
>>>>>>> d87ae12f6c5404803606924b1e14491a1c65cc66
