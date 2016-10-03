'use strict';

angular.
  module('tienditaColegial').
  config(['$locationProvider' ,'$routeProvider',
    function config($routeProvider) {

      $routeProvider.
        when('/', {
          template: '<home-page></home-page>'
        }).
        otherwise('/home-page');
    }
  ]);
