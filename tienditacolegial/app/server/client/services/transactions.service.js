'use strict';

angular.module('transactionsServiceModule',[])
    .factory('transactionsService',[

        '$mdDialog','$cookies','$http',
        function ($mdDialog,$cookies,$http) {


          var currentTransaction = {};
          var allUserTransactions = {};
          var numberOfTransactions = 0;

            return {

                setTransactionDetails: function(transaction){
                  transaction = currentTransaction
                },

                getTransactionDetails: function(){
                  return currentTransaction;
                },

                getAllUserTransactions: function(){
                  return allUserTransactions;
                },

                getNumberOfTransacions: function(){
                  return numberOfTransactions;
                },

                getUserTransactions: function(){
                  var userId = $cookies.get('cid');

                    $http({
                      method:'GET',
                      url: 'http://localhost:3000/account-info',
                      params:{p1:userId}
                    }).then(function(response){
                        if(response.data == ''){
                          numberOfTransactions = 0;
                        }else{
                          console.log(response.data);

                        }

                    },function(err){

                    });
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
