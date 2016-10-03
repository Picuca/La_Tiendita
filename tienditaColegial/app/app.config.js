'use strict';

angular.
  module('tienditaColegial').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/header', {
          template: '<header></header>'
        }).
        otherwise('/');
    }
  ]);
