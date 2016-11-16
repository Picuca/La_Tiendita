'use strict';

angular.module('userServiceModule',[])
    .factory('userService',[

        '$http','$route','$window','$cookies',
        function ($http,$route,$window,$cookies) {
            return {

                getUserSession: function () {
                    return $cookies.get('user');
                },

                setUserSession: function (inputEmail, inputPassword) {

                    $http({
                        method: 'GET',
                        url: 'http://localhost:3000/account',
                        params: {userEmail: inputEmail, userPassword: inputPassword}
                    }).then(function (response) {

                        if (response.data != 'error') {

                            $cookies.putObject('user',{
                                id: response.data.cid,
                                firstname: response.data.cfirst,
                                lastname: response.data.clast,
                                email: response.data.cemail,
                                phone: response.data.ctelephone,
                                type: response.data.ctype
                            });

                            // $location.path('/home-page');
                            $route.reload();
                            console.log($cookies.get('user'));


                        }else {
                            alert('Informacion invalida');
                        }

                    }, function (err) {
                        console.log('QUERY ERROR', err);

                    });
                },

                endUserSession: function () {
                    $cookies.remove('user');
                    $window.location.reload();

                }





            }


        }]);
