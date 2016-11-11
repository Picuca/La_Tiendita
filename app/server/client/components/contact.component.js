'use strict';

angular
  .module('contact')
  .component('contact', {
    templateUrl: 'views/contact.template.html',

}).controller('contactController', function ($scope) {
    $scope.contactMessage = 'Contact PAGE'
});