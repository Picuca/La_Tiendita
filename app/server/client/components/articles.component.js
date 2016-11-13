
'use strict';

angular
  .module('articles')
  .component('articles',{
    templateUrl: 'views/articles.template.html',

  }).controller('articlesController', function ($scope,$http) {
      $http({
                             method: 'GET',
                             url:'http://localhost:3000/articles'
                         }).then(function (res) {
                             console.log(res.data);
                             $scope.articles = res.data;
                         }, function (err) {
                             console.log(err);

                         })
});