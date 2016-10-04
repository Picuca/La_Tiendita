'use strict';

angular
  .module('articles')
  .component('articles',{
    templateUrl: 'articles/articles.template.html',

  }).controller('articlesComponent', function ($scope) {
      $scope.articlesMessage = 'ARTICLES PAGE';

});