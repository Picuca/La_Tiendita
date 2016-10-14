'use strict';

angular
  .module('gorras')
  .component('gorras',{
    templateUrl: 'ropa/gorras/gorras.template.html',

  }).controller('gorrasController', function ($scope, $http) {
    $http.get('dummyData/gorras.json').then(function(response){
        $scope.gorras = response.data;
    });


});
