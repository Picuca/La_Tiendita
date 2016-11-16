'use strict';

angular
  .module('account-info')
  .component('accountInfo',{
    templateUrl: 'views/account-info.template.html'

  })
    .controller('accountInfoCtrl',[

        '$scope','$timeout','userService',
        function ($scope, $timeout,userService) {

            var user = userService.getUserSession();

            // $scope.firstname = user.firstname;
            // $scope.lastname = user.lastname;
            // $scope.email = user.email;
            // $scope.phone = user.phone;
            // $scope.payMethod = 'SOME METHOD';






}]);
