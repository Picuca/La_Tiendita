var pg = require('pg');

var config = {
  user: 'user321', //env var: PGUSER
  database: 'localtiendita', //env var: PGDATABASE
  password: 'user321', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 10000, // how long a client is allowed to remain idle before being closed
};



var pool = new pg.Pool(config);

module.exports = pool;