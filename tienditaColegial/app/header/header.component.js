'use strict';

//Register 'sign-in' component alon with its associated controller

angular
  .module('header')
  .component('header', {
    templateUrl: 'header/header.template.html',


})
    .controller('headerCtrl',  function ($scope, $rootScope, $location) {
        $scope.message = "Iniciar Sesion";

        $scope.toAccount = function () {
            if($rootScope.currentUser != null){



                $scope.message = "Mi Cuenta";
                $location.path('/account-info');
            }
            else{

                $scope.message = "Iniciar Sesion"
                $location.path('/account');

            }

        };



});
