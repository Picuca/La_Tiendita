
angular
  .module('new-arrivals')
  .component('newArrivals', {
    templateUrl: 'views/new-arrivals.template.html',

}).controller('newArrivalsController', function ($scope, $http) {
     $http.get('dummyData/new-arrivals.json').then(function(response){
            $scope.newArrivals = response.data;
        });


});
