'use strict';

//Register 'sign-in' component alon with its associated controller

angular
  .module('sign-in')
  .component('signIn', {
    templateUrl: 'views/sign-in.template.html',


  }).controller('signInController', function ($scope) {
      $scope.signInMessage= "SIGN IN PAGE";

}).controller('signInGridController', function ($scope) {


});
