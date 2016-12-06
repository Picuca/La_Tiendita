'use strict';

angular.module('itemDetailModule')
    .component('item-detail',{
        templateUrl: 'views/itemDetail.template.html'

    })

    .controller('itemDetailCtrl',[
        '$scope','itemDetailService',
        function ($scope, itemDetailService) {



            $scope.currentItem = itemDetailService.getItemDetails();
            console.log($scope.currentItem);


              $scope.itemSizes = ['Pequeña','Mediana','Grande','Extra Grande'];
              $scope.selectedSize = '';


        }

    ]);
