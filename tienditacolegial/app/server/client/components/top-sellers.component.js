angular
  .module('top-sellers')
  .component('topSellers', {
    templateUrl: 'views/top-sellers.template.html',

}).controller('topSellersController', function ($scope, $http) {

 $http({
                              method: 'GET',
                                url:'http://localhost:3000/top-sellers'
                            }).then(function (res) {
                                console.log(res.data);
                                $scope.topSellers = res.data;
                            }, function (err) {
                                console.log(err);

                            })

});
