'use strict';

angular.
  module('tienditaColegial').
  config(['$locationProvider','$routeProvider',function ($locationProvider,$routeProvider) {
  $locationProvider.hashPrefix("!");

  $routeProvider
      .when("/account",{
        template: '<account></account>'

      }).when("/articles",{
    template: '<articles></articles>'

  }).when("/account-info",{

    resolve:{
      "check": function ($location, $rootScope) {
        if(!$rootScope.loggedIn){
          $location.path('/');
        }
      }
    },

    template: '<account-info></account-info>'

  }).when("/books",{
    template: "<books></books>"

  }).when("/cart",{
    template: "<cart></cart>"

  }).when("/contact", {
    template: "<contact></contact>"

  }).when("/home-page",{
    template:"<home-page></home-page>"

  }).when("/checkout",{
    template:"<checkout></checkout>"

  }).when("/ropa", {
    template: "<ropa></ropa>"

  }).when("/sign-in", {

    template:"<sign-in></sign-in>"

  }).when("/top-sellers", {
    template: " <top-sellers></top-sellers>"

  }).when("/new-arrivals",{
    template: " <new-arrivals></new-arrivals>"

  }).when("/payed",{
    template: " <payed></payed>"


  }).otherwise("/home-page");


}]).config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('green');


});
