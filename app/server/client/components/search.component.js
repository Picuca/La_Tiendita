'use strict';

angular.
  module('search').
  component('search', {
    templateUrl: 'views/search.template.html',

}).controller('searchController', function ($scope, $http) {





                     $http({
                            method: 'GET',
                            url:'http://localhost:3000/search'
                            params:{ item: itemSearchService.get()}
                        }).then(function (res) {
                            console.log(res.data);
                            $scope.articulos = res.data;
                        }, function (err) {
                            console.log(err);

                        })



});
