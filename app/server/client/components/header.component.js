'use strict';

//Register 'sign-in' component alon with its associated controller

angular
  .module('header')
  .component('header', {
    templateUrl: 'views/header.template.html',


})
    .controller('headerCtrl', [

        '$scope','$location','$route','userService',
        function ($scope, $location,$route, userService) {


            $scope.message = 'Iniciar Sesion';
            $scope.hideMe = true;

            $scope.user = userService.getUserSession();

            if(typeof($scope.user) == 'undefined'){

                $scope.message = 'Iniciar Sesion';
                $scope.hideMe = true;

                $scope.toAccount = function () {

                    $location.path('/account');


                }

            }else{

                $scope.message = 'Mi Cuenta';
                $scope.hideMe = false;

                $scope.toAccount = function () {

                    $location.path('/account-info')
                }
            }


            $scope.logout = function () {
                userService.endUserSession();
                $location.path('/home-page');

            };


}]);
