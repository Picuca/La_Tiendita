'use strict';

angular.
  module('cart').
  component('cart', {
    templateUrl: 'views/cart.template.html',

}).controller('cartController',[

    '$scope','userService','ngCart','$http','$location',
    function ($scope,userService,ngCart,$http, $location) {

        $scope.checkCart = function () {

        };

       $scope.pay = function (){

       var items = ngCart.getItems();
       var ammountPay=  ngCart.totalCost();
       var user = userService.getUserSession();
       var ids = [];
       for(var i =0;i < items.length;i++){
             ids.push(items[i].getId());

       }


      $http({
                              method: 'POST',
                              url:'http://localhost:3000/cart',
                              params: { p1:user.cid , p2:ids, p3:ammountPay},
                              data:{}

                              }).then(function(response){


                              },function(err){
                                  console.log('ERROR ON QUERY',err)

                              });



         $location.path("/home-page");

        };



}]);
