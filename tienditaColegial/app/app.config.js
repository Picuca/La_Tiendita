'use strict';

angular.
  module('tienditaColegial').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/books', {
          template: '<books></books>'

        }).when('/home-page', {
        template: '<home-page></home-page>'

        }).when('/sign-in', {
          template: '<sign-in></sign-in>'

        }).when('/ropa', {
          template: '<ropa></ropa>'

        }).when('/contact', {
          template: '<contact></contact>'

        }).when('/articles', {
          template: '<articles></articles>'

        }).when('/books', {
          template: '<books></books>'

        }).when('/cart', {
          template: '<cart></cart>'

        }).when('/account', {
        template: '<account></account>'
      }).
          otherwise('/home-page');
    }
  ]);
