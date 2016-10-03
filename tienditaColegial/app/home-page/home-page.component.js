'use strict';

angular
  .module('home-page')
  .component('home-page', {
    templateUrl: 'home-page/home-page.template.html',
    controller: ['$http',function homePageController($http) {
        var self = this;
        self.homeMessage = 'HI THERE';
    }]
});
