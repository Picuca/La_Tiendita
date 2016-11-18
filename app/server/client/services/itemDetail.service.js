'use strict';

angular.module('itemDetailServiceModule',[])
    .factory('itemDetailService',[

        '$mdDialog',
        function ($mdDialog) {
            return {

                getItemDetail: function ($scope,event) {

                    $mdDialog.show({
                        templateUrl: 'views/itemDetail.template.html',
                        parent: angular.element(document.body),
                        targetEvent: event,
                        clickOutsideToClose:true,
                        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                    })
                        .then(function(answer) {
                            $scope.status = 'You said the information was "' + answer + '".';
                        }, function() {
                            $scope.status = 'You cancelled the dialog.';
                        });


                }

            }

        }]);