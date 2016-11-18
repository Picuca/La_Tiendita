'use strict';

//Register 'sign-in' component alon with its associated controller

angular
  .module('header')
  .component('header', {
    templateUrl: 'views/header.template.html',


})
    .controller('headerCtrl', [

        '$scope','$location','$window','userService',
        function ($scope, $location,$window, userService) {


            $scope.message = 'Iniciar Sesion';
            $scope.hideMe = true;
            $scope.hideUpdate = true;
            $scope.user = userService.getUserSession();

            if(typeof($scope.user) == 'undefined'){

                $scope.message = 'Iniciar Sesion';
                $scope.hideMe = true;
                $scope.hideUpdate = true;
                $scope.toAccount = function () {

                    $location.path('/account');


                }

            }else{

                 var userInfo = JSON.parse($scope.user);
                 if(userInfo.ctype == 'admin'){
                  $scope.hideUpdate = false;
                  $scope.updateInventory = function () {

                      $location.path('/update-inventory')
                }
                }

                $scope.message = 'Mi Cuenta';
                $scope.hideMe = false;

                $scope.toAccount = function () {

                    $location.path('/account-info')
                }
            }



            $scope.logout = function () {
                userService.endUserSession();
                $window.location.reload();
                $location.path('/home-page');

            };
}]);
