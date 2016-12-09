  'use strict';

angular.module('userServiceModule',[])
    .factory('userService',[

        '$http','$location','$cookies','$mdDialog','$window',
        function ($http,$location,$cookies,$mdDialog,$window) {


            var infoToChange = '';
            var inputInsert = '';

            return {

                getUserLogged: function(){
                  return userLogged;
                },

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



                    return currentUser;
                },

                connectFB: function(inputEmail,inputPassword){
                  firebase.auth().signInWithEmailAndPassword(inputEmail, inputPassword).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    console.log('CODE ERROR ' + errorCode);
                    console.log(errorMessage);
                    // ...
                  });
                },

                  sendVerifyEmail: function(){
                  var user = firebase.auth().currentUser;

                  user.sendEmailVerification().then(function() {
                    // Email sent.
                  }, function(error) {
                    // An error happened.
                  });
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

                          $location.path('/home-page');

                        }

                    }, function (err) {
                        console.log('QUERY ERROR', err);

                    });
                },

                deleteUser: function(userEmail){

                  swal({
                    title: 'Su cuenta sera borrada permanentemente.',
                    type: 'warning',
                    confirmButtonColor: 'red',
                    confirmButtonText: 'Borrar Cuenta'
                  }).then(function() {

                      swal({
                        title:'Su cuenta ha sido cancelada',
                        allowOutsideClick:false
                          }).then(function(){

                            var user = firebase.auth().currentUser;
                            user.delete().then(function(){
                            },function(error){
                            });

                            $http({
                              method: 'POST',
                              url:'http://localhost:3000/account-info',
                              params:{p1:userEmail}
                            }).then(function(response){

                            }, function(err){
                              console.log('ERROR RUNNING QUERY',err);
                            })

                          });
                  });
                },

                createAccount: function(newName,newLastname,newPassword, newEmail,newPhone){


                    $http({
                        method:'POST',
                        url:'http://localhost:3000/account',
                        headers: {
                          'Content-Type': undefined
                        },
                        params:{ p1: newName, p2: newLastname, p3: newPassword, p4: newEmail, p5: newPhone },
                        data:{}
                    }).then(function(response){


                      $cookies.put('cid', response.data.cid);
                      $cookies.put('cfirst', response.data.cfirst);
                      $cookies.put('clast', response.data.clast);
                      $cookies.put('cemail', response.data.cemail);
                      $cookies.put('ctelephone', response.data.ctelephone);
                      $cookies.put('ctype', response.data.ctype);

                    }, function(err){
                        console.log('QUERY ERROR', err);
                        swal('Ya existe ese usuario o su informacion es muy larga');
                    });

                },

                editUserInfo: function(ev,someInfo,someDisplay){

                  var confirm = $mdDialog.prompt()
                    .title('Editar   ' + someDisplay)
                    .clickOutsideToClose(true)
                    .textContent('Escriba su informacion')
                    .placeholder(someDisplay)
                    .initialValue('')
                    .targetEvent(ev)
                    .ok('Guardar Cambios')
                    .cancel('Cancelar');

                    $mdDialog.show(confirm).then(function(result) {
                      inputInsert = result;
                      infoToChange = someInfo

                      if(typeof(result) != 'undefined'){

                        var userId = JSON.parse($cookies.get('cid'));

                        $http({
                          method: 'POST',
                          url:'http://localhost:3000/account-info',
                          params:{p1: result , p2: userId, p3: someInfo},
                          data:{}

                        }).then(function(response){

                            $cookies.remove(someInfo);
                            $cookies.put(someInfo,result);


                            $window.location.reload();

                        }, function(err){
                          console.log('QUERY ERROR', err);

                        });
                      }

                    }, function() {

                    });

                },

                endUserSession: function () {
                  firebase.auth().signOut().then(function() {
                    // Sign-out successful.
                  }, function(error) {
                    // An error happened.
                  });

                    $cookies.remove('userId');
                    $cookies.remove('cid');
                    $cookies.remove('cfirst');
                    $cookies.remove('clast');
                    $cookies.remove('cemail');
                    $cookies.remove('ctelephone');
                    $cookies.remove('ctype');

                    $window.location.reload();
                    $location.path('/home-page');
                },

                invalidInfo: function(){
                  $mdDialog.show(
                      $mdDialog.alert()
                          .clickOutsideToClose(true)
                          .title('Informacion incorrecta')
                          .ok('Cerrar')
                          .openFrom('#left')
                          .closeTo(angular.element(document.querySelector('#right'))));
                },

            }


        }]);
