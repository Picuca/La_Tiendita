'use strict';

angular
  .module('account')
  .component('account', {
    templateUrl: 'account/account.template.html',

  })
    .controller('accountCtrl', function ($scope, $http, $location, $rootScope) {

        $http.get('/app/DUMMYDATA/users/users.json').then(function (response) {
            this.users = response.data;
        });


        $scope.submit = function () {

          if($scope.username == 'admin' && $scope.password == 'admin'){
              $rootScope.loggedIn = true;
              console.log($rootScope.loggedIn);

              $rootScope.currentUser = {
                  "name":"admin",
                  "lastname": "admin",
                  "username": "admin",
                  "password": "admin",
                  "email": "admin@email.com",
                  "phone": "787-XXX-XXXX",
                  "payMethod": "PAYMENT"
                };
              $location.path('/account-info')

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