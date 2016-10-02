'use strict';

//Register 'sign-in' component alon with its associated controller

angular
  .module('sign-in')
  .component('sign-in', {
    templateUrl: 'ign-in/sign-in.template.html',
    controller: [ function signInController() {
        var self = this;

    }]
});