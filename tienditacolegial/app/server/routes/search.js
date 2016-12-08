var db = require('../database');


exports.getSearch = function (req, res) {

    db.connect(function(err, client, done) {
        if(err) {
            return console.error('error fetching client from pool', err);
        }
        var field = req.query.p1;

        client.query("SELECT * FROM allitems WHERE UPPER(itemname) LIKE "+ "'%" + field + "%'", function(err, result) {
            done();

            if(err) {
                return console.error('error running query', err);
            }
            res.send(result.rows);
            console.log(req.query.p1);
        });
    });

    db.on('error', function (err, client) {
        console.error('idle client error', err.message, err.stack)
    });
}
