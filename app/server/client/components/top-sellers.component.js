angular
  .module('top-sellers')
  .component('topSellers', {
    templateUrl: 'views/top-sellers.template.html',

}).controller('topSellersController', function ($scope, $http) {
    $http.get('dummyData/new-arrivals.json').then(function(response){
           $scope.topSellers = response.data;
       });


});
