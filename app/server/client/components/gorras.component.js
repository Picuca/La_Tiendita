'use strict';

angular
  .module('gorras')
  .component('gorras',{
    templateUrl: 'views/gorras.template.html',

  }).controller('gorrasController', function ($scope, $http) {
     $http({
                            method: 'GET',
                            url:'http://localhost:3000/gorras'
                        }).then(function (res) {
                            console.log(res.data);
                            $scope.gorras = res.data;
                        }, function (err) {
                            console.log(err);

                        })



});
