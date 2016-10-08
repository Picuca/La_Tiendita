
angular
  .module('new-arrivals')
  .component('newArrivals', {
    templateUrl: 'new-arrivals/new-arrivals.template.html',

}).controller('new-arrivalsPageController', function ($scope) {
    $scope.homePageMessage = 'new-arrivals';


});
