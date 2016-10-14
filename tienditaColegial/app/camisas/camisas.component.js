'use strict';

angular
  .module('camisas')
  .component('camisas',{
    templateUrl: 'camisas/camisas.template.html',

  }).controller('camisasController', function ($scope) {
      $scope.camisasMessage = "Camisas PAGE";

});
