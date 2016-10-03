'use strict';

//Register 'sign-in' component alon with its associated controller

angular
  .module('header')
  .component('header-nav', {
    templateUrl: 'header/header.template.html',
    controller: [ function headerController() {
        var self = this;

    }]
});