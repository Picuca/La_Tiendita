'use strict';

angular
    .module('checkout')
    .component('checkout', {
        templateUrl: 'views/checkout.template.html',

    }).controller('checkoutController', function ($scope, $location) {
    //$scope.card = {"cardnumber":123456789, "CVV":222, "ExpDate":"05/18"};

    $scope.cardnumber ='';
    $scope.CVV ='';
    $scope.ExpDate ='';

    $scope.checkCard = function (cardnumber, CVV, ExpDate) {


        $http({
            method: 'GET',
            url:'http://localhost:3000/checkout'
        }).then(function (res) {
            console.log(res.data);
            $scope.card = res.data;
        }, function (err) {
           // console.log(err);

        });


        if(card.cardnum== cardnumber && card.securitynum == CVV &&
            card.expdate == ExpDate){
            $location.path('payed');

        }


    }
});