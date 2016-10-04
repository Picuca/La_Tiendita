'use strict';

//Register 'sign-in' component alon with its associated controller

angular
  .module('footer-nav')
  .component('footerNav', {
    templateUrl: 'footer-nav/footer-nav.template.html',


}).controller('myController', ['$scope', function ($scope) {

  $scope.blablabla = "BLABLABLA";

}]).controller('myController2', ['$scope', function ($scope) {

    $scope.blablabla2 = 'BLABLABLA2'

}]);