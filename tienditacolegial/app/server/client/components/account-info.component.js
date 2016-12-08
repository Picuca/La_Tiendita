'use strict';

angular
  .module('account-info')
  .component('accountInfo',{
    templateUrl: 'views/account-info.template.html'

  })
    .controller('accountInfoCtrl',[

        '$scope','$window','userService',
        function ($scope,$window,userService) {

            var user = userService.getUserSession();

            $scope.firstname = user.cfirst;
            $scope.lastname = user.clast;
            $scope.email = user.cemail;
            $scope.phone = user.ctelephone;
            $scope.payMethod = 'SOME METHOD';


            if(!firebase.auth().currentUser.emailVerified){
              swal({
                title: 'Cuenta no verificada.',
                text: "Un mensaje ha sido enviado a " + user.cemail + ". Favor de verificar. Gracias",
                type: 'warning',
                allowOutsideClick: false,
                confirmButtonColor: 'green',
                confirmButtonText: 'OK'
              }).then(function   () {
                if(firebase.auth().currentUser.emailVerified){
                  swal('Su cuenta ha sido verificada');

                }else{
                  $window.location.reload();
                }
              });
            }

            $scope.editUserInfo = function(ev,infoToChange,dialogDisplay){

              userService.editUserInfo(ev,infoToChange,dialogDisplay);

            }

            $scope.deleteAccount = function(){

              userService.deleteUser(user.cemail);

            };


            $scope.seeUser = function(){

              var user = firebase.auth().currentUser;
              console.log(user);
            }

}]);
