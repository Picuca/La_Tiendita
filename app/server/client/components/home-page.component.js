'use strict';

angular
  .module('home-page')
  .component('homePage', {
    templateUrl: 'views/home-page.template.html',

})
    .controller('homePageController', [

        '$scope','$route','$rootScope',
        function ($scope,$route,$rootScope) {

            $scope.$on('userLogged',function () {
                $route.reload();
            })


}]);
