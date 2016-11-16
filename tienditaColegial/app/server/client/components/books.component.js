'use strict';

angular
  .module('books')
  .component('books',{
    templateUrl: 'views/books.template.html',

  }).controller('booksController', function ($scope,$http) {


                 $http({
                        method: 'GET',
                        url:'http://localhost:3000/books'
                    }).then(function (res) {
                        console.log(res.data);
                        $scope.books = res.data;
                    }, function (err) {
                        console.log(err);

                    })






});
