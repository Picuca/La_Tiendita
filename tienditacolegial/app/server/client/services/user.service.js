'use strict';

angular.module('userServiceModule',[])
    .factory('userService',[

        '$http','$location','$cookies','$mdDialog','$window',
        function ($http,$location,$cookies,$mdDialog,$window) {


            var infoToChange = '';

            return {

                getInfoToChange: function(){
                  return infoToChange;

                },

                getUserSession: function () {

                    var currentUser = {
                      cid: $cookies.get('cid'),
                      cfirst: $cookies.get('cfirst'),
                      clast: $cookies.get('clast'),
                      cemail: $cookies.get('cemail'),
                      ctelephone: $cookies.get('ctelephone'),
                      ctype: $cookies.get('ctype')

                    }


                    // var user = $cookies.get('user');

                    return currentUser;
                },


                attemptSession: function (inputEmail, inputPassword) {

                    $http({
                        method: 'GET',
                        url: 'http://localhost:3000/account',
                        params: {userEmail: inputEmail, userPassword: inputPassword}
                    }).then(function (response) {

                        if (response.data != '') {

                          $cookies.put('cid', response.data.cid);
                          $cookies.put('cfirst', response.data.cfirst);
                          $cookies.put('clast', response.data.clast);
                          $cookies.put('cemail', response.data.cemail);
                          $cookies.put('ctelephone', response.data.ctelephone);
                          $cookies.put('ctype', response.data.ctype);

                          $window.location.reload();
                          $location.path('/home-page');
                        }

                    }, function (err) {
                        console.log('QUERY ERROR', err);

                    });


                },

                editUserInfo: function(ev,someInfo){

                  infoToChange = someInfo;

                  $mdDialog.show({
                      templateUrl: 'views/editUser.template.html',
                      parent: angular.element(document.body),
                      targetEvent: ev,
                      clickOutsideToClose:true,
                      fullscreen: false
                    });

                },

                keepUserChanges: function(inputInfo){
                  var userId = JSON.parse($cookies.get('userId'));


                  $http({
                    method: 'POST',
                    url:'http://localhost:3000/account-info',
                    params:{p1: inputInfo , p2: userId, p3: infoToChange},
                    data:{}

                  }).then(function(response){

                      // $cookies.remove(infoToChange);
                      // $cookies.put(infoToChange,inputInfo);

                      // console.log($cookies.get(infoToChange));

                      // $window.location.reload();

                  }, function(err){
                    console.log('QUERY ERROR', err);

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
                    // $cookies.remove('user');
                    $cookies.remove('cid');
                    $cookies.remove('cfirst');
                    $cookies.remove('clast');
                    $cookies.remove('cemail');
                    $cookies.remove('ctelephone');
                    $cookies.remove('ctype');
                },
            }


        }]);
