'use strict';

angular.module('transactionsServiceModule',[])
    .factory('transactionsService',[

        '$mdDialog','$cookies',
        function ($mdDialog,$cookies) {


          var currentTransaction = {};

            return {

                setTransactionDetails: function(transaction){
                  transaction = currentTransaction
                },

                getTransactionDetails: function(){
                  return currentTransaction;
                },

                getUserTransactions: function(){
                    var userId = $cookies.get('cid');
                    console.log(userId);
                },

                showTransactions: function (ev) {

                  $mdDialog.show({
                      templateUrl: 'views/transactions.template.html',
                      parent: angular.element(document.body),
                      targetEvent: ev,
                      clickOutsideToClose:true,
                      fullscreen: false
                    });
                },

            }
        }]);
