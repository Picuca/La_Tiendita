'use strict';

angular
  .module('ropa')
  .component('ropa', {
    templateUrl: 'ropa/ropa.template.html',

}).controller('ropaController', function ($scope) {
    $scope.ropaMessage = "ROPA PAGE";

});