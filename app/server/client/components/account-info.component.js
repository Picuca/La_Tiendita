'use strict';

angular
  .module('account-info')
  .component('accountInfo',{
    templateUrl: 'views/account-info.template.html'

  })
    .controller('accountInfoCtrl',[

        '$scope','$timeout','userService',
        function ($scope, $timeout,userService) {

            $scope.user = userService.getUserSession();
            console.log(userService.getUserSession());

            // $scope.firstname = $scope.user.firstname;
            // $scope.lastname = $scope.user.lastname;
            // $scope.email = $scope.user.email;
            // $scope.phone = $scope.user.phone;
            // $scope.payMethod = 'SOME METHOD';

            // $scope.$apply(function () {
            //     $timeout.reload();
            //
            // })






}]);
