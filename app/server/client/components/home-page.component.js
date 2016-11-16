'use strict';

angular
  .module('home-page')
  .component('homePage', {
    templateUrl: 'views/home-page.template.html',

})
    .controller('homePageController', [

        '$scope','$http', 'userService',
        function ($scope, $http, userService) {



}]);
