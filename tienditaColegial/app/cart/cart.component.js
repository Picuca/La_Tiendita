'use strict';

angular.
  module('cart').
  component('cart', {
    templateUrl: 'cart/cart.template.html',

}).controller('cartController', function ($scope) {
      $scope.cartMessage = 'CART PAGE';

});