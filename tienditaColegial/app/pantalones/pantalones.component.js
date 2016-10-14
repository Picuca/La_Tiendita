'use strict';

angular
  .module('pantalones')
  .component('pantalones',{
    templateUrl: 'pantalones/pantalones.template.html',

  }).controller('pantalonesController', function ($scope) {
      $scope.camisasMessage = "Pantalones PAGE";

});
