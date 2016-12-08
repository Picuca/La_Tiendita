
'use strict';

//Register 'sign-in' component alon with its associated controller

angular
  .module('header')
  .component('header', {
    templateUrl: 'views/header.template.html',


})
    .controller('headerCtrl', [

        '$scope','$location','$window','userService','itemSearchService',
        function ($scope, $location,$window, userService, itemSearchService ) {


            $scope.message = 'Iniciar Sesion';
            $scope.hideMe = true;
            $scope.hideUpdate = true;
            var user = userService.getUserSession();


            if(typeof(user.cid) == 'undefined'){

                $scope.message = 'Iniciar Sesion';
                $scope.hideMe = true;
                $scope.hideUpdate = true;
                $scope.toAccount = function () {

                    $location.path('/account');


                }

            }else{

                 var userInfo = user;
                //  console.log(userInfo)
                 if(userInfo.ctype == 'admin'){
                  $scope.hideUpdate = false;
                  $scope.updateInventory = function () {

                      $location.path('/update-inventory')
                }
                }

                $scope.message = 'Mi Cuenta';
                $scope.hideMe = false;

                $scope.toAccount = function () {

                    $location.path('/account-info')
                }
            }



            $scope.logout = function () {
                console.log('hi');
                userService.endUserSession();
                $window.location.reload();
                $location.path('/home-page');

            }

            $scope.itemSearch = function(itn){

            itemSearchService.set(itn);
            //console.log(itemSearchService.get());
            $location.path("/search");
            };



}]);
