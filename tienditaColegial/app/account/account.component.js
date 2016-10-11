'use strict';

angular
  .module('account')
  .component('account', {
    templateUrl: 'account/account.template.html',

  }).controller('accountCtrl', function ($scope, $location, $rootScope) {
      $scope.submit = function () {

          if($scope.username == 'admin' && $scope.password == 'admin'){
              $rootScope.loggedIn = true;
              $location.path('/sign-in')

          }else {
              alert('OOPS algo esta mal!!! \n \n' +
                  'Nombre de Usuario: admin \n\n' +
                  'Contrasena: admin');
          }
      };

      $scope.newAccount = function () {
          if($scope.newName != null || $scope.newLastName != null || $scope.newUsername != null ||
            $scope.newPassword != null || $scope.retypePassword != null || $scope.newEmail != null || $scope.newPhone != null){

              alert('Se ha creado tu cuenta ' + $scope.newName);
              $location.path('/account-info');
          }else{
             alert('Favor de llenar todos los campos de informacion');
          }

      };


  });