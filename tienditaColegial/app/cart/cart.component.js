'use strict';

angular.
  module('cart').
  component('cart', {
    templateUrl: 'cart/cart.template.html',

}).controller('cartController',['$scope','$http','ngCart', function ($scope,$http,$ngCart) {
    $scope.cartMessage = 'CART PAGE';

}]);
