'use strict';

angular
  .module('header')
  .component('header', {
    templateUrl: 'views/header.template.html'


})
    .controller('headerCtrl',[

        '$scope','$location',
        function ($scope, $location, userService) {

            if(true){
                $scope.message = "Iniciar Sesion";
                $scope.hideMe = false;
                $scope.sendTo = function () {
                $location.path('/account');
                }
            }else{

                $scope.message = 'Mi Cuenta';
                $scope.hideMe = false;
                $scope.sendTo = function toAccount() {
                    $location.path('/account-info');
                }

            }

        // $scope.logout = function () {
        //     userService.endSession();
        //     $scope.hideMe = true;
        //     $scope.message = 'Iniciar Session';
        //     $location.path('/home-page');
        //
        // };
}]);
