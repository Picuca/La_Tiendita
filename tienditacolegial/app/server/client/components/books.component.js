'use strict';

angular
  .module('books')
  .component('books',{
    templateUrl: 'views/books.template.html',

  })
    .controller('booksCtrl',[

        '$scope','$http','itemDetailService',
        function ($scope,$http,itemDetailService) {

            $scope.books = {};
            $scope.imageUrl = '';

            $http({
                method: 'GET',
                url:'http://localhost:3000/books'
            }).then(function (res) {
                $scope.books = res.data;
            }, function (err) {
                console.log(err);

            });


            $scope.getBookDetails = function (ev,someBook) {

                itemDetailService.setItemDetails(someBook);
                itemDetailService.showItemDetails(ev);
            };

}]);
