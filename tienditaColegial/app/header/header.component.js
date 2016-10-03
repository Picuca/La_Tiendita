'use strict';

//Register 'sign-in' component alon with its associated controller

angular
  .module('header')
  .component('header', {
    templateUrl: 'header/header.template.html',
    controller: [ '$scope', function ($scope) {
      this.component1Message = 'Hello';
    }]

}).controller('myController', ['$scope', function ($scope) {

  $scope.blablabla = "BLABLABLA";

}]).controller('myController2', ['$scope', function ($scope) {

    $scope.blablabla2 = 'BLABLABLA2'

}]);
