'use strict';

angular
  .module('account-info')
  .component('accountInfo',{
    templateUrl: 'views/account-info.template.html',

  })
    .controller('accountInfoCtrl', function ($scope, $rootScope) {

        if($rootScope.loggedIn){

            $scope.name = $rootScope.currentUser.n;
            $scope.lastname = $rootScope.currentUser.clast;
            $scope.email = $rootScope.currentUser.cemail;
            $scope.phone = $rootScope.currentUser.ctelephone;
            $scope.payMethod = "ALGUN METODO";
        };

        $scope.pressed = false;
        $scope.showInfoType = false;


        $scope.editInfo = function () {
            $scope.pressed = true;

        }

});
