var db = require('../database');


exports.updateInventory = function (req,res) {

    db.connect(function(err, client, done) {
        if(err) {

            console.error('error fetching client from pool', err);
        }



        if(req.query.p2 =='pant' || req.query.p2 == 'shirt' || req.query.p2 == 'hat'){

                     db.connect(function(err, client, done) {

          if(err) {
          return console.error('error fetching client from pool', err);
            }
          client.query(
            'INSERT INTO item (quantity) VALUES($1)', [req.query.p7], function(err, result) {

             done();
             if(err) {
             return console.error('error running query', err);
                   }
                   });

                    db.on('error', function (err, client) {
                    console.error('idle client error', err.message, err.stack)
                     });

               client.query(
              'SELECT itemId FROM ITEM ORDER BY itemid DESC LIMIT 1',
             function(err, result) {
               done();
                 itemId = result.rows[0].itemid;
                 console.log("id of the item:");
                 console.log(itemId);
                 var tableName = req.query.p2;


                  client.query(
                  'insert into ' + tableName + ' (itemid, itemname, price, size, description,                                           imageurl,author) values($1, $2, $3, $4 , $5, $6, $7)', [itemId, req.query.p1, req.query.p4, req.query.p6, req.query.p3, req.query.p5, "NA"],


                   function(err, result) {
                     done();

                     if(err) {
                       return console.error('error running query', err);
                         }


                        });
                        if(err) {
                        return console.error('error running query', err);
                           }
                            });
           })

       }

      else if(req.query.p2 == 'schoolsupplies'){


         db.connect(function(err, client, done) {

                                   if(err) {
                                    return console.error('error fetching client from pool', err);
                                      }

                                     client.query(
                                    'INSERT INTO item (quantity) VALUES($1)', [req.query.p7], function(err, result) {

                                       done();

                                   if(err) {
                                           return console.error('error running query', err);
                                       }
                                    });

                                db.on('error', function (err, client) {
                                 console.error('idle client error', err.message, err.stack)
                            });



                             client.query(
                                 'SELECT itemId FROM ITEM ORDER BY itemid DESC LIMIT 1',

                             function(err, result) {
                              done();
                               itemId = result.rows[0].itemid;
                               console.log("Results :");
                               console.log(itemId);
                               var tableName = req.query.p2;
                                client.query(
                                           'insert into ' + tableName + ' (itemid, itemname, price, size, description,                                           imageurl,author, brand) values($1, $2, $3, $4 , $5, $6, $7 ,$8)', [itemId, req.query.p1, req.query.p4, "NA",req.query.p3, req.query.p5, "NA", req.query.p6],


                                 function(err, result) {
                                   done();

                                    if(err) {
                                     return console.error('error running query', err);
                                      }


                                     });
                             if(err) {
                             return console.error('error running query', err);
                                              }
                                 });
             })

        }

        else if(req.query.p2 == 'book'){

 db.connect(function(err, client, done) {

           if(err) {
         return console.error('error fetching client from pool', err);
          }

           client.query(
            'INSERT INTO item (quantity) VALUES($1)', [req.query.p8], function(err, result) {

              done();

                if(err) {
                 return console.error('error running query', err);
                  }
                   });

                 db.on('error', function (err, client) {
                 console.error('idle client error', err.message, err.stack)
                });


                 client.query(
                  'SELECT itemId FROM ITEM ORDER BY itemid DESC LIMIT 1',

                  function(err, result) {
                  done();
                  itemId = result.rows[0].itemid;
                  console.log("Results :");
                  console.log(itemId);
                  var tableName = req.query.p2;

                  client.query(
    'insert into ' + tableName + ' (itemid, description, itemname, price, author, publisher ,imageurl, size  ) values($1, $2, $3, $4 , $5, $6, $7 ,$8)', [itemId, req.query.p3, req.query.p1, req.query.p4, req.query.p6, req.query.p7, req.query.p5, "NA"],


                function(err, result) {
                 done();

                   if(err) {
                    return console.error('error running query', err);
                      }
                 });
               if(err) {
                return console.error('error running query', err);
                             }
               });
             })

        }


    });

    db.on('error', function (err, client) {
        console.error('idle client error', err.message, err.stack)
    });
};
