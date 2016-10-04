'use strict';

angular
  .module('books')
  .component('books',{
    templateUrl: 'books/books.template.html',

  }).controller('booksController', function ($scope) {
      $scope.booksMessage = "Books PAGE";

});
