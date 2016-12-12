'use strict';

angular.module('addItemServiceModule',[])
    .factory('addItemService',[

        '$http',
        function ($http) {

            return {



                addClothes: function(articleName,selectedType,descripcion,articlePrice,imageurl,                               sizeSelection,cantidadArticulo){

                                    console.log("Aqui estamos en el Add item service");
                                     console.log(articleName);
                                      console.log(sizeSelection);
                                      console.log(cantidadArticulo);

                      $http({
                        method: 'POST',
                        url:'http://localhost:3000/update-inventory',
                        params: { p1:articleName , p2:selectedType , p3:descripcion ,p4:articlePrice,p5:                                          imageurl, p6: sizeSelection, p7: cantidadArticulo
                                }

                        }).then(function(response){


                        },function(err){
                            console.log('ERROR ON QUERY',err)

                        });
                },

                addBook: function(articleName,selectedType,descripcion,articlePrice,imageurl,                               autor, casaPublicadora, cantidadArticulo){

                $http({
                                        method: 'POST',
                                        url:'http://localhost:3000/update-inventory',
                                        params:{p1:articleName , p2:selectedType , p3:descripcion ,                                                               p4:articlePrice,p5: imageurl,p6: autor, p7:casaPublicadora,                                                   p8: cantidadArticulo
                                                }

                                        }).then(function(resonse){


                                        },function(err){
                                            console.log('ERROR ON QUERY',err)

                                        });


                },



                addArticle: function(articleName,selectedType,descripcion,articlePrice,imageurl,                               fabricante, cantidadArticulo) {
                     $http({
                method: 'POST',
                url:'http://localhost:3000/update-inventory',
                params:{p1:articleName , p2:selectedType , p3:descripcion , p4:articlePrice,p5: imageurl,
                          p6:fabricante, p7:cantidadArticulo
                         }

                    }).then(function(resonse){


                     },function(err){
                         console.log('ERROR ON QUERY',err)

                       });







                }





            }
        }]);
