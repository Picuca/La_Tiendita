'use strict';

//Register 'sign-in' component alon with its associated controller

angular
  .module('header')
  .component('header', {
    templateUrl: 'header/header.template.html',


})
    .controller('headerCtrl',  function ($scope, $rootScope, $location) {
        $scope.message = "Iniciar Sesion";
        $scope.hideMe = false;

        $scope.$on('logged', function (event,data) {
            $scope.message = data.message;
            $scope.hideMe = data.showLogout;
        } );



        $scope.toAccount = function () {
            if($rootScope.currentUser != null){

                $location.path('/account-info');
            }
            else{

                $scope.message = "Iniciar Sesion"
                $location.path('/account');

            }

        };

        $scope.logout = function () {
            $scope.hideMe = false;
            $rootScope.loggedIn = false;
            $rootScope.currentUser = null;
            $scope.message = 'Iniciar Session';
            $location.path('/home-page');

        };
});
