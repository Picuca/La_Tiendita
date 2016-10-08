angular
  .module('top-sellers')
  .component('topSellers', {
    templateUrl: 'top-sellers/top-sellers.template.html',

}).controller('new-arrivalsPageController', function ($scope) {
    $scope.homePageMessage = 'new-arrivals';


});
