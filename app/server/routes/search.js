var db = require('../database');


exports.getSearch = function (req, res) {


    db.connect(function(err, client, done) {
        if(err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('SELECT * FROM book' +
        'WHERE itemname LIKE $1',[itemSearchService.get()] ,function(err, result) {

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
}