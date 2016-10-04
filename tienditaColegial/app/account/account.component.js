'use strict';

angular
  .module('account')
  .component('account', {
    templateUrl: 'account/account.template.html',

  }).controller('accountController', function ($scope) {
      $scope.accountMessage = 'ACCOUNT PAGE';

});
