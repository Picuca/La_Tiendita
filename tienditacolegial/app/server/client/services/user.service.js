  'use strict';

angular.module('userServiceModule',[])
    .factory('userService',[

        '$http','$location','$cookies','$mdDialog','$window',
        function ($http,$location,$cookies,$mdDialog,$window) {

            return {

                userLogged: function(){
                  if(firebase.auth().currentUser == null){
                    return false;
                  }else{
                    return true;
                  }
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
                  firebase.auth().signInWithEmailAndPassword(inputEmail, inputPassword).then(function(response){
                    console.log(response);
                  });
                },

                  sendVerifyEmail: function(){
                  var user = firebase.auth().currentUser;

                  user.sendEmailVerification().then(function() {
                    console.log('EMAIL SENT');
                  }, function(error) {
                    console.log('EMAIL NOT SENT');
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

                editUserInfo: function(someInfo,someDisplay){

                  swal({
                    title: 'Cambiar ' + someDisplay,
                    input: 'text',
                    showCancelButton:true,
                    confirmButtonColor:'green'
                  }).then(function (input) {
                    if(input == ''){
                      swal({
                        type:'warning',
                        title:'Favor de escribir informacion'
                      });

                    }else{

                      var userId = JSON.parse($cookies.get('cid'));

                      if(someInfo=='cpassword'){
                        $http({
                          method:'POST',
                          url:'http://localhost:3000/account-info',
                          params:{p1:input, p2:userId, p3:someInfo},
                          data:{}
                        }).then(function(response){
                          $cookies.remove(someInfo);
                          $cookies.put(someInfo,input);
                          firebase.auth().currentUser.updatePassword(input).then(function(){
                            console.log('Password Updated');
                          });

                        }, function(err){
                          console.log('ERROR IN QUERY',err);
                        });

                      }else if(someInfo == 'cemail'){

                        $http({
                          method:'POST',
                          url:'http://localhost:3000/account-info',
                          params:{p1:input, p2:userId, p3:someInfo},
                          data:{}
                        }).then(function(response){
                          $cookies.remove(someInfo);
                          $cookies.put(someInfo,input);
                          firebase.auth().currentUser.updateEmail(input).then(function(){
                            console.log('email Updated');
                          });

                        }, function(err){
                          console.log('ERROR IN QUERY',err);
                        });

                      }else{
                        $http({
                          method:'POST',
                          url:'http://localhost:3000/account-info',
                          params:{p1:input, p2:userId, p3:someInfo},
                          data:{}
                        }).then(function(response){
                          $cookies.remove(someInfo);
                          $cookies.put(someInfo,input);

                        }, function(err){
                          console.log('ERROR IN QUERY',err);
                        });
                      }

                      swal({
                        title:'Informacion Actualizada',
                        confirmButtonColor:'green',
                        allowOutsideClick: false
                      }).then(function(){
                        $window.location.reload();
                      });

                    }
                  });
                },

                editCard: function(){

                  swal.setDefaults({
                    input: 'text',
                    confirmButtonText: 'Next &rarr;',
                    confirmButtonColor:'green',
                    showCancelButton: true,
                    animation: false,
                    progressSteps: ['1', '2', '3']
                  });

                  var steps = [
                    {
                      title: 'Editar Tarjeta de Credito',
                      text: 'Numero de tarjeta'
                    },

                    {
                      title: 'Editar Tarjeta de Credito',
                      text: 'CVV'
                    },
                    {
                      title: 'Editar Tarjeta de Credito',
                      text: 'Fecha de expiracion'
                    },

                  ];

                  swal.queue(steps).then(function (result) {
                    if(result[0]=="" || result[1]=="" || result[2]==""){
                      swal({
                        type:'warning',
                        title:'Favor de llenar toda la informacion',
                        confirmButtonColor:'green'
                      });
                    }else{
                      swal({
                        title:'Informacion sera actualizada',
                        confirmButtonColor:'green'
                      }).then(function(){

                      var userId = $cookies.get('cid');

                        $http({
                          method:'POST',
                          url:'http://localhost:3000/account-info',
                          params:{p1:input[0],p2:input[1],p3:input[2],p4:userId}
                        }).then(function(){

                        },function(err){
                          console.log('ERROR QUERY',err);
                        });
                      });
                    }
                  }, function () {
                    swal.resetDefaults()

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
                  swal({
                    type:'error',
                    title:'Informacion Incorrecta',
                    text:'Verifique email o password',
                    confirmButtonColor:'green'
                  })
                },

            }


        }]);
