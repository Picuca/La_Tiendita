'use strict';

angular
  .module('account-info')
  .component('accountInfo',{
    templateUrl: 'account-info/account-info.template.html',

  }).controller('accountInfController', function ($scope) {
  $scope.accountInfoMessage = "Account Info";

});
