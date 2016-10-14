'use strict';

angular
  .module('books')
  .component('books',{
    templateUrl: 'books/books.template.html',

  }).controller('booksController', function ($scope,$http) {
       $http.get('dummyData/books.json').then(function(response){
                $scope.books = response.data;
          });

});
