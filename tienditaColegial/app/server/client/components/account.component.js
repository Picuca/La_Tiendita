'use strict';

angular
  .module('account')
  .component('account', {
    templateUrl: 'views/account.template.html'

  })
    .controller('accountCtrl', [

        '$scope','$location',
        function ($scope,$location, userService) {

            $scope.inputEmail = '';
            $scope.inputPassword = '';


            $scope.logIn = function (inputEmail, inputPassword) {
                userService.startSession(inputEmail,inputPassword);
            }

        }]);