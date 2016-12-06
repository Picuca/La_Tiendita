'use strict';

angular
  .module('account')
  .component('account', {
    templateUrl: 'views/account.template.html',

  })
    .controller('accountCtrl', [

        '$scope','$cookies','$location','$window','userService',
        function ($scope,$cookies,$location,$window, userService) {
            $scope.inputEmail ='';
            $scope.inputPassword = '';


            $scope.startSession= function (inputEmail, inputPassword) {

                if(inputPassword == '' || inputEmail == ''){
                    return userService.invalidInfo();

                }else{
                  if(userService.attemptSession(inputEmail,inputPassword)){
                        userService.invalidInfo();
                  }else{
                      $location.path('/home-page');
                      $window.location.reload()

                  }
                }
            }

            $scope.newAccount = function () {

                userService.endUserSession();
                $location.path('/home-page')
            }


  }]);
