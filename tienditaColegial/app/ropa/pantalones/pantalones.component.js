'use strict';

angular
  .module('pantalones')
  .component('pantalones',{
    templateUrl: 'ropa/pantalones/pantalones.template.html',

  }).controller('pantalonesController', function ($scope) {
      $scope.camisasMessage = "Pantalones PAGE";

});
