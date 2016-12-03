'use strict';

angular.module('itemDetailModule')
    .component('item-detail',{
        templateUrl: 'views/itemDetail.template.html'

    })

    .controller('itemDetailCtrl',[
        '$scope','itemDetailService',
        function ($scope, itemDetailService) {

            $scope.holyShit = 'HOLY!!!';

            $scope.currentItem = itemDetailService.getItemDetails();
            console.log($scope.currentItem);


        }
    ]);
