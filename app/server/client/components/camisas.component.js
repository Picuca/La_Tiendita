'use strict';

angular
  .module('camisas')
  .component('camisas',{
    templateUrl: 'views/camisas.template.html',

  }).controller('camisasController',[

    '$scope','$http','itemDetailService',
   function ($scope, $http, itemDetailService) {

                     $http({
                            method: 'GET',
                            url:'http://localhost:3000/camisas'
                        }).then(function (res) {
                            console.log(res.data);
                            $scope.camisas = res.data;
                        }, function (err) {
                            console.log(err);

                        });

                        $scope.getShirtDetails = function (ev,someShirt) {

                            itemDetailService.setItemDetails(someShirt);
                            itemDetailService.showItemDetails(ev);
                        };




}]);
