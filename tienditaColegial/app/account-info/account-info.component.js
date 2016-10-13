'use strict';

angular
  .module('account-info')
  .component('accountInfo',{
    templateUrl: 'account-info/account-info.template.html',

  })
    .controller('accountInfoCtrl', function ($scope, $rootScope) {

        if($rootScope.loggedIn){

            $scope.name = $rootScope.currentUser.name;
            $scope.lastname = $rootScope.currentUser.lastname;
            $scope.email = $rootScope.currentUser.email;
            $scope.phone = $rootScope.currentUser.phone;
            $scope.payMethod = $rootScope.currentUser.payMethod;

        }




});
