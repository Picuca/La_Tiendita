'use strict';

angular
    .module('checkout')
    .component('checkout', {
        templateUrl: 'checkout/checkout.template.html',

    }).controller('checkoutController', function ($scope, $location) {
        $scope.card = {"cardnumber":123456789, "CVV":222, "ExpDate":"05/18"};
        // $scope.isOK = true;
        $scope.checkCard = function () {
            if($scope.cardnumber== $scope.card.cardnumber && $scope.CVV == $scope.card.CVV &&
                $scope.ExpDate == $scope.card.ExpDate){
                $location.path('payed');

            }


        }
});