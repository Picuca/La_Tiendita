'use strict';

angular
  .module('account')
  .component('account', {
    templateUrl: 'views/account.template.html',

  })
    .controller('accountCtrl', [

        '$scope', '$http', '$location','$route','$cookies','userService',
        function ($scope, $http, $location,$route,$cookies, userService) {
            $scope.inputEmail ='';
            $scope.inputPassword = '';


            $scope.startSession= function (inputEmail, inputPassword) {

                userService.setUserSession(inputEmail,inputPassword);
                console.log(userService.getUserSession());
                console.log('MEH');
            }

            $scope.newAccount = function () {

                $cookies.remove('user');
            }


  }]);