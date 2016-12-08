'use strict';

angular.
  module('search').
  component('search', {
    templateUrl: 'views/search.template.html',

}).controller('searchController', function ($scope, $http, itemSearchService, itemDetailService) {

    $scope.itemName = '';

                    var x = itemSearchService.get();

                     $http({
                            method: 'GET',
                            url:'http://localhost:3000/search',
                            params:{p1: x}

                        }).then(function (res) {
                            console.log(res.data);
                            $scope.articulos = res.data;
                        }, function (err) {
                            console.log(err);

                        });

                        $scope.getSearchDetails = function (ev,someShirt) {

                        itemDetailService.setItemDetails(someShirt);
                            itemDetailService.showItemDetails(ev);
                          };


    $scope.selectedSize = '';
    $scope.itemSizes = ['10 - 12','14 - 16','Pequeña','Mediana','Grande','Extra Grande','Extra Extra Grande'];




});
