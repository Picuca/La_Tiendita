'use strict';

angular
  .module('contact')
  .component('contact', {
    templateUrl: 'contact/contact.template.html',

}).controller('contactController', function ($scope) {
    $scope.contactMessage = 'Contact PAGE'
});