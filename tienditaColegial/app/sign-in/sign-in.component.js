'use strict';

//Register 'sign-in' component alon with its associated controller

angular
  .module('sign-in')
  .component('sign-in', {
    templateUrl: 'sign-in/sign-in.template.html',


  }).controller('mainController', function ($scope) {
      $scope.signInMessage= "SIGN IN PAGE";

});