'use strict';

angular
  .module('pantalones')
  .component('pantalones',{
    templateUrl: 'views/pantalones.template.html',

  }).controller('pantalonesController', function ($scope,$http) {
    $http.get('dummyData/pantalon.json').then(function(response){
        $scope.pantalon = response.data;
    });

});

