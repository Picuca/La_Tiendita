'use strict';

angular
  .module('home-page')
  .component('homePage', {
    templateUrl: 'home-page/home-page.template.html',

}).controller('homePageController', function ($scope) {
    $scope.homePageMessage = 'HOME PAGE';


});
