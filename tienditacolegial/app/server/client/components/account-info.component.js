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


            // EMAIL VERIFICATION STEP
            if(firebase.auth().currentUser.emailVerified == false){
              swal({
                title: 'Cuenta no verificada.',
                text: "Un email ha sido enviado a " + user.cemail + ". Favor de verificar. Gracias",
                type: 'warning',
                allowOutsideClick: false,
                confirmButtonColor: 'green',
                confirmButtonText: 'Reenviar Email'
              }).then(function   () {

                userService.sendVerifyEmail();

                if(firebase.auth().currentUser.emailVerified){
                  swal('Su cuenta ha sido verificada');

                }else{
                  swal('Un email a sido enviado a ' + user.cemail).then(function(){
                    $window.location.reload();

                  });
                }
              });
            }
            // // EMAIL VERIFICATION STEP


            $scope.editUserInfo = function(infoToChange,dialogDisplay){

              userService.editUserInfo(infoToChange,dialogDisplay);

            }

            $scope.editCardInfo = function(){
              userService.editCard();
            }





            $scope.deleteAccount = function(){

              userService.deleteUser(user.cemail);
              if(firebase.auth().currentUser.emailVerified == null){
              userService.endUserSession();
            }
          }


}]);
