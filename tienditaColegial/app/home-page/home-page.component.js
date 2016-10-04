'use strict';

angular
  .module('home-page')
  .component('home-page', {
    templateUrl: 'home-page/home-page.template.html',

}).controller('homePageController', function ($scope) {
    $scope.homePageMessage = 'HOME PAGE';


});
