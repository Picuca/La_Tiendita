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
      "check": function ($location, userService) {
        if(typeof(userService.getUserSession()) == 'undefined'){

            swal('FAVOR DE INICIAR SESION');
            $location.path('/')
        }else if(typeof(userService.getUserSession()) != 'undefined'){
          $location.path('/account-info');
        }
      }
    },

    template: '<account-info></account-info>'

  }).when("/books",{
    template: "<books></books>"

  }).when("/cart",{

    resolve:{
      "check": function ($location, userService) {
        if(firebase.auth().currentUser == null){
            swal({
              title:'Favor de Iniciar Sesion',
              confirmButtonColor:'green'
            });
            $location.path('/home-page');
        }else{
          $location.path('/cart');
        }
      }
    },

    template: "<cart></cart>"

  }).when("/contact", {
    template: "<contact></contact>"

  }).when("/home-page",{
    template:"<home-page></home-page>"

  }).when("/checkout",{
    template:"<checkout></checkout>"

  }).when("item-detail/:itemid",{
    template: "<item-detail></item-detail>"

  }).when("/ropa", {
    template: "<ropa></ropa>"

  }).when("/sign-in", {
    template:"<sign-in></sign-in>"

  }).when("/top-sellers", {
    template: "<top-sellers></top-sellers>"

  }).when("/new-arrivals",{
    template: "<new-arrivals></new-arrivals>"

  }).when("/payed",{
    template: "<payed></payed>"

  }).when("/camisas", {
    template: "<camisas></camisas>"

  }).when("/pantalones",{
    template: "<pantalones></pantalones>"

  }).when("/gorras",{
    template: "<gorras></gorras>"

  }).when("/search",{
    template: "<search></search>"

  }).when("/update-inventory",{
    template: "<update-inventory></update-inventory>"

  }).otherwise("/home-page");


}]).config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('green');


});
