'use strict';

angular
  .module('account-info')
  .component('accountInfo',{
    templateUrl: 'views/account-info.template.html'

  })
    .controller('accountInfoCtrl',[

        '$scope','$timeout','userService',
        function ($scope, $timeout,userService) {

            var user = JSON.parse(userService.getUserSession());

            $scope.firstname = user.cfirst;
            $scope.lastname = user.clast;
            $scope.email = user.cemail;
            $scope.phone = user.ctelephone;
            $scope.payMethod = 'SOME METHOD';

}]);
