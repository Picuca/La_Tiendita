'use strict';

angular
  .module('gorras')
  .component('gorras',{
    templateUrl: 'views/gorras.template.html',

  }).controller('gorrasController',['$scope','$http','itemDetailService',
                    function ($scope, $http, itemDetailService) {
                    $http({
                            method: 'GET',
                            url:'http://localhost:3000/gorras'
                        }).then(function (res) {
                            console.log(res.data);
                            $scope.gorras = res.data;
                        }, function (err) {
                            console.log(err);

                        });

                        $scope.getHatDetails = function (ev,someHat) {

                            itemDetailService.setItemDetails(someHat);
                            itemDetailService.showItemDetails(ev);
                        };

                     $scope.itemSizes = ['Pequeña','Mediana','Grade','Extra Grande'];
                                $scope.selectedSize = 'Mediana';


}]);
