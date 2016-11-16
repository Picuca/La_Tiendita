'use strict';

angular.module('userServiceModule',[])
    .factory('userService',[

        '$http','$timeout','$location','$cookies','$rootScope',
        function ($http,$timeout,$location,$cookies,$rootScope) {
            return {

                getUserSession: function () {
                    var user = $cookies.get('user');

                    return JSON.parse(user);
                },

                setUserSession: function (inputEmail, inputPassword) {

                    $http({
                        method: 'GET',
                        url: 'http://localhost:3000/account',
                        params: {userEmail: inputEmail, userPassword: inputPassword}
                    }).then(function (response) {

                        if (response.data != 'error') {

                            $cookies.putObject('user',{
                                cid: response.data.cid,
                                cfirst: response.data.cfirst,
                                clast: response.data.clast,
                                cemail: response.data.cemail,
                                ctelephone: response.data.ctelephone,
                                type: response.data.ctype
                            });
                        }else {
                            alert('Informacion invalida');
                        }

                    }, function (err) {
                        console.log('QUERY ERROR', err);

                    });
                },

                endUserSession: function () {
                    $cookies.remove('user');
                    $location.path('/home-page');
                }





            }


        }]);
