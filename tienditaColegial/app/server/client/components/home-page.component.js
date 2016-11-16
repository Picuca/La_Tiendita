'use strict';

angular
  .module('home-page')
  .component('homePage', {
    templateUrl: 'views/home-page.template.html',

})
    .controller('homePageController',[

        '$scope','$cookies','userService',
        function ($scope,$cookies, userService) {

            // userService.getCurrentUser().then(
            //     function (response) {
            //         console.log(response);
            //     }
            // );
            // $cookies.remove('user');

}]);
