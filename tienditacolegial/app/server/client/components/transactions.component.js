'use strict';

angular
  .module('transactionsModule')
  .component('transactions', {
    templateUrl: 'views/transactions.template.html',

})
    .controller('transactionsCtrl', [

        '$scope','transactionsService',
        function ($scope,transactionsService) {

          $scope.noTransactions = 'You have not done any transactions';
          $scope.noTransactions = true;
          transactionsService.getUserTransactions();

          if(transactionsService.getNumberOfTransacions == 0){
            $scope.noTransactions = true;
          }else{

            $scope.noTransactions = false;


          }



}]);
