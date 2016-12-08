'use strict';

angular
  .module('account-info')
  .component('accountInfo',{
    templateUrl: 'views/account-info.template.html'

  })
    .controller('accountInfoCtrl',[

        '$scope','$rootScope','userService',
        function ($scope,$rootScope,userService) {

            var user = userService.getUserSession();

            $scope.firstname = user.cfirst;
            $scope.lastname = user.clast;
            $scope.email = user.cemail;
            $scope.phone = user.ctelephone;
            $scope.payMethod = 'SOME METHOD';

            $scope.editUserInfo = function(ev,infoToChange,dialogDisplay){

              userService.editUserInfo(ev,infoToChange,dialogDisplay);

            }

            $scope.seeCurrentUser = function(){

              var user = firebase.auth().currentUser;
              console.log(user);
            }

            $scope.startUser = function(){
              firebase.auth().signInWithEmailAndPassword('arnaldo@gmail.com', 'arnaldo').catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log('CODE ERROR ' + errorCode);
                console.log(errorMessage);
                // ...
              });
            }

}]);
