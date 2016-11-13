'use strict';

angular
  .module('home-page')
  .component('homePage', {
    templateUrl: 'views/home-page.template.html',

}).controller('homePageController', function ($scope, $http) {

    $http({
        method: 'GET',
        url:'http://localhost:3000/home-page'
    }).then(function (res) {
        console.log(res.data);

    }, function (err) {
        console.log(err);

    })


});
