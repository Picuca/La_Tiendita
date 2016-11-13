'use strict';

angular
  .module('pantalones')
  .component('pantalones',{
    templateUrl: 'views/pantalones.template.html',

  }).controller('pantalonesController', function ($scope,$http) {

                 $http({
                        method: 'GET',
                        url:'http://localhost:3000/pantalon'
                    }).then(function (res) {
                        console.log(res.data);
                        $scope.pantalon = res.data;
                    }, function (err) {
                        console.log(err);

                    })


});

