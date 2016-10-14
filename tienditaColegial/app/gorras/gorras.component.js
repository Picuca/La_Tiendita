'use strict';

angular
  .module('gorras')
  .component('gorras',{
    templateUrl: 'gorras/gorras.template.html',

  }).controller('gorrassController', function ($scope) {
      $scope.camisasMessage = "gorras PAGE";

});
