'use strict';

//Register 'sign-in' component alon with its associated controller

angular
  .module('header')
  .component('header', {
    templateUrl: 'header/header.template.html',
    controller: [ '$scope', function headerController($scope) {
       this.controllerMessage = "HI I AM CONTROLLER 1";

    }]

});
