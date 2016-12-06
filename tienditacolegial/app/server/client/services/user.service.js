'use strict';

angular.module('userServiceModule',[])
    .factory('userService',[

        '$http','$location','$cookies','$mdDialog',
        function ($http,$location,$cookies,$mdDialog) {

            var infoToChange = '';

            return {

                getInfoToChange: function(){
                  return infoToChange;

                },

                getUserSession: function () {
                    var user = $cookies.get('user');

                    return user;
                },


                attemptSession: function (inputEmail, inputPassword) {

                    $http({
                        method: 'GET',
                        url: 'http://localhost:3000/account',
                        params: {userEmail: inputEmail, userPassword: inputPassword}
                    }).then(function (response) {

                        if (response.data != '') {

                          $cookies.putObject('user',{
                              cid: response.data.cid,
                              cfirst: response.data.cfirst,
                              clast: response.data.clast,
                              cemail: response.data.cemail,
                              ctelephone: response.data.ctelephone,
                              ctype: response.data.ctype
                          });
                        }

                    }, function (err) {
                        console.log('QUERY ERROR', err);

                    });

                    if(typeof($cookies.get('user')) == 'undefined'){
                      return true

                    }else{
                      return false

                    }


                },

                changeUserInfo: function(ev,someInfo){

                  infoToChange = someInfo;

                  $mdDialog.show({
                      templateUrl: 'views/editUser.template.html',
                      parent: angular.element(document.body),
                      targetEvent: ev,
                      clickOutsideToClose:true,
                      fullscreen: false
                    });

                },

                invalidInfo: function(){
                  $mdDialog.show(
                      $mdDialog.alert()
                          .clickOutsideToClose(true)
                          .title('Verifique sus Credenciales')
                          .ok('Cerrar')
                          .openFrom('#left')
                          .closeTo(angular.element(document.querySelector('#right'))));

                },


                endUserSession: function () {
                    $cookies.remove('user');
                },
            }


        }]);
