'use strict';

angular
  .module('account')
  .component('account', {
    templateUrl: 'views/account.template.html',

  })
    .controller('accountCtrl', [

        '$scope', '$rootScope', '$location','$window','userService',
        function ($scope,$rootScope,$location,$window, userService) {
            $scope.inputEmail ='';
            $scope.inputPassword = '';


            $scope.startSession= function (inputEmail, inputPassword) {

                userService.setUserSession(inputEmail,inputPassword);

                if(typeof(userService.getUserSession()) != 'undefined'){
                    $window.location.reload();
                    $location.path('/');

                }



                // $location.path('/home-page');
            }

            $scope.newAccount = function () {

                userService.endUserSession();
            }


  }]);