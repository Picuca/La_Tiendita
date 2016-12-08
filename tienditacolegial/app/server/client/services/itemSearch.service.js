'use strict';

angular.module('itemSearchServiceModule',[])
    .factory('itemSearchService',


    function() {

        var savedData = '';

        function set(data){
            savedData = data.toUpperCase();
        }
        function get(){
            return savedData
        }

        return {
            set: set,
            get: get
        }

        });
