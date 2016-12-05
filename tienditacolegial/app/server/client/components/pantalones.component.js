'use strict';

angular
  .module('pantalones')
  .component('pantalones',{
    templateUrl: 'views/pantalones.template.html',

  }).controller('pantalonesController',[ '$scope','$http','itemDetailService',
             function ($scope,$http, itemDetailService) {

                 $http({
                        method: 'GET',
                        url:'http://localhost:3000/pantalon'
                    }).then(function (res) {
                        console.log(res.data);
                        $scope.pantalon = res.data;
                    }, function (err) {
                        console.log(err);

                    });


                    $scope.getPantDetails = function (ev,somePant) {

                        itemDetailService.setItemDetails(somePant);
                        itemDetailService.showItemDetails(ev);
                    };

            $scope.itemSizes = ['Pequeño','Mediano','Grade','Extra Grande','Extra Extra Grande'];
            $scope.selectedSize = '';

}]);
