'use strict';

angular.module('home-page', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home-page', {
      templateUrl: 'home-page/home-page.html',
      controller: 'home-pageCtrl'
    });
  }])

  .controller('home-pageCtrl', [function() {

    var self = this;
    self.message = "HELLO WORLD";

  }]);