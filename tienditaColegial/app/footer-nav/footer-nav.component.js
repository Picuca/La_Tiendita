'use strict';

//Register 'sign-in' component alon with its associated controller

angular
  .module('footer-nav')
  .component('footerNav', {
    templateUrl: 'footer-nav/footer-nav.template.html',


}).controller('footerCtrl', ['$scope', function ($scope) {

  $scope.blablabla = "BLABLABLA";

}]);