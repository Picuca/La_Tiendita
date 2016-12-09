'use strict';

angular
  .module('transactionsModule')
  .component('transactions', {
    templateUrl: 'views/transactions.template.html',

})
    .controller('transactionsCtrl', [

        '$scope','userService',
        function ($scope,userService) {

}]);
