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
            $scope.displayMessage = '';
            $scope.$on('dialogDisplay',function(event,args){
              $scope.displayMessage = args.data;
            });



            $scope.keepChanges = function(someInfo){

              userService.keepUserChanges(someInfo);

            }


  }]);
