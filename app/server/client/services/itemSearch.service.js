'use strict';

angular.module('itemSearchServiceModule',[])
    .factory('itemSearchService',


    function() {

        var savedData = '';

        function set(data){
            savedData = data;
        }
        function get(){
            return savedData
        }

        return {
            set: set,
            get: get
        }

<<<<<<< HEAD
        });
=======
        });
>>>>>>> d87ae12f6c5404803606924b1e14491a1c65cc66
