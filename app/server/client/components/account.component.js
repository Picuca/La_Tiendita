'use strict';

angular
  .module('account')
  .component('account', {
    templateUrl: 'views/account.template.html',

  })
    .controller('accountCtrl', function ($scope, $http, $location, $rootScope) {

      $scope.users = [
          {"id":1 , "name": "admin ", "lastname": "admin", "username": "admin" , "password": "admin", "email": "admin@email.com" , "payMethod":"ATH", "phone": "787-XXX-XXX" },
          {"id":2 , "name": "Manuel", "lastname": "Rodriguez", "username": "manuel" , "password": "password", "email": "manuel@email.com" , "payMethod":"ATH", "phone": "787-XXX-XXX" }];

      $scope.submit = function () {


          $http({
              method: 'GET',
              url: 'http://localhost:3000/account',
          }).then(function(res) {
              $scope.users = res.data;

              console.log($scope.users);
          }, function(err) {
              console.log(err);
          });

            for(var i =0; i < $scope.users.length; i++){
                if($scope.username == $scope.users[i].username && $scope.password == $scope.users[i].password){
                    $rootScope.loggedIn = true;
                    $rootScope.currentUser = $scope.users[i];
                    console.log($rootScope.currentUser);
                    $rootScope.$broadcast('logged', {"message": "Mi cuenta", "showLogout": true});
                    $location.path('account-info')

                }else if($scope.username == null || $scope.password == null ){
                    alert('OOPS!!! \n' + 'Nombre de Usuario o Contrasena erroneos \n' + 'Nombre de Usuario: admin \n' + 'Contrasena: admin')

                }

            }
      }

      $scope.newAccount = function () {

          var newInfo = [
              $scope.newName,
              $scope.newLastname,
              $scope.newUsername,
              $scope.newPassword,
              $scope.retypePassword,
              $scope.newEmail,
              $scope.newPhone
          ];
          for(var i =0 ; i < newInfo.length; i++){

              if(newInfo[i] == null){
                  alert('Favor de llenar todos los campos de informacion \n \n Gracias.');
                  return
              }
              else if(newInfo[3] != newInfo[4]){
                  alert('Asegurese de que ambas contrasenas sean iguales')
                  return
              }
          }

          $location.path('/sign-in');

      }
  });