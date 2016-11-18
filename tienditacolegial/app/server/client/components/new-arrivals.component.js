
angular
  .module('new-arrivals')
  .component('newArrivals', {
    templateUrl: 'views/new-arrivals.template.html',

}).controller('newArrivalsController',[


'$scope','$http','itemDetailService',
function ($scope, $http,itemDetailService) {
      $http({
                             method: 'GET',
                             url:'http://localhost:3000/new-arrivals'
                         }).then(function (res) {
                             console.log(res.data);
                             $scope.newArrivals = res.data;
                         }, function (err) {
                             console.log(err);

                         });

                         $scope.getnewArrivalDetails = function (ev,someArrival) {

                             itemDetailService.setItemDetails(someArrival);
                             itemDetailService.showItemDetails(ev);
                         };


}]);
