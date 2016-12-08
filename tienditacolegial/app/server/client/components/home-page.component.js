'use strict';

angular
  .module('home-page')
  .component('homePage', {
    templateUrl: 'views/home-page.template.html',

})
    .controller('homePageCtrl', [

        '$scope','userService',
        function ($scope,userService) {

}]);
