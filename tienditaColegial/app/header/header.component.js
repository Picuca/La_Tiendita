'use strict';

//Register 'sign-in' component alon with its associated controller

angular
  .module('header')
  .component('header', {
    templateUrl: 'header/header.template.html',


}).controller('navBarController', ['$scope', function navBarController($scope) {

    $scope.currentNavItem = "PLACE ITEMS HERE";

}]);
