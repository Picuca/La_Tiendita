'use strict';

angular
  .module('account-info')
  .component('accountInfo',{
    templateUrl: 'views/account-info.template.html',

  })
    .controller('accountInfoCtrl',[

        '$scope',
        function ($scope, userService) {

            $scope.name ='';
            $scope.lastname = '';
            $scope.email = '';
            $scope.phone = '';
            $scope.payMethod = "ALGUN METODO";

            var user = userService.getCurrentUser().then(
                function (response) {
                    console.log(response);
                }
            );



        }]);
