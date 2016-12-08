'use strict';

angular
  .module('account')
  .component('account', {
    templateUrl: 'views/account.template.html',

  })
    .controller('accountCtrl', [

        '$scope','$cookies','$location','userService',
        function ($scope,$cookies,$location, userService) {

            //Start Session
            $scope.inputEmail ='';
            $scope.inputPassword = '';

            //New Account Info
            $scope.newName = '';
            $scope.newLastname = '';
            $scope.newPassword = '';
            $scope.newRetypePassword = '';
            $scope.newEmail = '';
            $scope.newPhone = '';

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

            $scope.newAccount = function ( newName,
                newLastname,
                newPassword,
                newRetypePassword,
                newEmail,
                newPhone
            ) {

              if(newName == '' || newLastname == '' || newPassword == '' || newRetypePassword == '' || newEmail == '' || newPhone == ''){

                  return userService.invalidInfo();

              }else if(newPassword == newRetypePassword){

                userService.createAccount(newName, newLastname, newPassword,newEmail,newPhone);
                // $location.path('/home-page')


              }else{

                userService.invalidInfo();
              }



            }


  }]);
