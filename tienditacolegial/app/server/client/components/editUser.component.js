'use strict';

angular
  .module('editUserModule')
  .component('editUser', {
    templateUrl: 'views/editUser.template.html',

  })
    .controller('editUserCtrl', [

        '$scope','$window','userService',
        function ($scope,$window, userService) {

            $scope.inputInfo = '';

            $scope.keepChanges = function(someInfo){

              userService.keepUserChanges(someInfo);

            }


  }]);
