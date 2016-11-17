'use strict';

angular
  .module('home-page')
  .component('homePage', {
    templateUrl: 'views/home-page.template.html',

})
    .controller('homePageCtrl', [

        '$scope','itemDetailService',
        function ($scope,itemDetailService) {

            $scope.getDetails = function(ev){
                itemDetailService.getItemDetail($scope,ev);
            }

}]);
