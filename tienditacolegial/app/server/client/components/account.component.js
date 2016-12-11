'use strict';

angular
  .module('account')
  .component('account', {
    templateUrl: 'views/account.template.html',

  })
    .controller('accountCtrl', [

        '$scope','$cookies','$location','$window','userService',
        function ($scope,$cookies,$location,$window, userService) {

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

                  if(userService.userLogged()){
                    userService.attemptSession(inputEmail, inputPassword);
                    $location.path('/home-page');
                    $window.location.reload();


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

                });

                if(firebase.auth().currentUser !=null){

                  userService.createAccount(newName, newLastname, newPassword,newEmail,newPhone);
                  $location.path('/home-page');
                  $window.location.reload();



                }else{


                  userService.invalidInfo();

                }
              }
            }


  }]);
