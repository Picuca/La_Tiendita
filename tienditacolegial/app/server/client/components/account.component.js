'use strict';

angular
  .module('account')
  .component('account', {
    templateUrl: 'views/account.template.html',

  })
    .controller('accountCtrl', [

        '$scope','$cookies','$location','userService',
        function ($scope,$cookies,$location, userService) {
          
            $scope.inputEmail ='';
            $scope.inputPassword = '';


            $scope.startSession= function (inputEmail, inputPassword) {

                if(inputPassword == '' || inputEmail == ''){
                    return userService.invalidInfo();

                }else{
                  userService.attemptSession(inputEmail, inputPassword);

                  if(typeof($cookies.get('cid') =='undefined')){
                      userService.invalidInfo();
                  }
                }
            }

            $scope.newAccount = function () {

                userService.endUserSession();
                $location.path('/home-page')
            }


  }]);
