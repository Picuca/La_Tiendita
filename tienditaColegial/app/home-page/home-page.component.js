'use strict';

angular
  .module('home-page')
  .component('home-page', {
    templateUrl: 'home-page/home-page.template.html',
    controller: ['$scope',function homePageController($scope) {

        $scope.newMessage = "Hello People";
    }]
});
