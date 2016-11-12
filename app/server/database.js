var pg = require('pg');

var config = {
  user: 'postgres', //env var: PGUSER
  database: 'test', //env var: PGDATABASE
  password: 'postgres', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 10000, // how long a client is allowed to remain idle before being closed
};



var pool = new pg.Pool(config);

pool.connect(function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }
  client.query('SELECT $1::int AS number', ['1'], function(err, result) {
    console.log('done');
    done();

    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].number);
    console.log('I did it');
  });
});

pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack)
});


module.exports = pool;