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

                  userService.connectFB(inputEmail,inputPassword);

                  if(firebase.auth().currentUser != null){
                    userService.attemptSession(inputEmail, inputPassword);
                  }else{
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

                firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword).catch(function(error) {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  // ...
                });

                if(firebase.auth().currentUser !=null){

                  userService.sendVerifyEmail();
                  userService.createAccount(newName, newLastname, newPassword,newEmail,newPhone);

                }else{


                  userService.invalidInfo();

                }
              }
            }


  }]);
