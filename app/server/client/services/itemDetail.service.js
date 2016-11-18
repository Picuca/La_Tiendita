'use strict';

angular.module('itemDetailServiceModule',[])
    .factory('itemDetailService',[

        '$mdDialog',
        function ($mdDialog) {


          var currentItem = {};

            return {

                setItemDetails: function(inputItem){
                  currentItem = inputItem;
                },

                getItemDetails: function(){
                  return currentItem;
                },



                showItemDetails: function (ev) {

                  $mdDialog.show({
                      templateUrl: 'views/itemDetail.template.html',
                      parent: angular.element(document.body),
                      targetEvent: ev,
                      clickOutsideToClose:true,
                      fullscreen: false
                    });
                },

            }
        }]);
