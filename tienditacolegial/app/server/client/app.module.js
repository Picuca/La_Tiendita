'use strict';

// Define the `tienditaCOlegial` module
angular.module('tienditaColegial', ['ngMaterial', 'ngCart','ngMessages',
    'ngCookies',
    'userServiceModule',
    'itemDetailServiceModule',
    'itemSearchServiceModule',
    'itemDetailModule',
    'ngRoute',
    'account',
    'account-info',
    'articles',
    'books',
    'cart',
    'checkout',
    'contact',
    'footer-nav',
    'header',
    'home-page',
    'ropa',
    'sign-in',
    'new-arrivals',
    'top-sellers',
    'payed',
    'camisas',
    'gorras',
    'pantalones',
    'search',
    'update-inventory'

]).controller('mainCtrl',[
      '$scope',
      function($scope){

          $scope.dialogMessage = '';




      }]);
