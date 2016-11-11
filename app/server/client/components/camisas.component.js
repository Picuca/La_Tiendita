'use strict';

angular
  .module('camisas')
  .component('camisas',{
    templateUrl: 'views/camisas.template.html',

  }).controller('camisasController', function ($scope, $http) {
    $http.get('dummyData/camisas.json').then(function(response){
        $scope.camisas = response.data;
    });


});
