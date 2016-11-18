'use strict';

angular
  .module('account')
  .component('account', {
    templateUrl: 'views/account.template.html',

  })
    .controller('accountCtrl', [

        '$scope','$timeout','$location','$window','userService',
        function ($scope,$timeout,$location,$window, userService) {
            $scope.inputEmail ='';
            $scope.inputPassword = '';


            $scope.startSession= function (inputEmail, inputPassword) {

                userService.setUserSession(inputEmail,inputPassword);

                if(typeof(userService.getUserSession()) != 'undefined'){
                    $window.location.reload();
                    $location.path('/');
                }

            }

            $scope.newAccount = function () {

                userService.endUserSession();
            }


  }]);
