
angular
    .module('userServiceModule',[])
    .service('userService', [

        '$scope','$http','$cookies','$location',
        function ($scope, $http, $cookies, $location) {


            //Get current user in session
            this.getCurrentUser =  function () {
                return $cookies.getObject('user');

            };

            this.userLogged = function () {

                if(true){
                    return false;

                }else{

                    return true;
                }
            };

            //Start user session
            this.startSession = function (inputEmail, inputPassword) {

                console.log('MEH');
                //
                // $http({
                //     method: 'GET',
                //     url: 'http://localhost:3000/account',
                //     params: {userEmail: inputEmail, userPassword: inputPassword}
                // }).then(function (response) {
                //
                //     if (response.data != 'error') {
                //
                //         $cookies.putObject('user',{
                //             cid: response.data.cid,
                //             cfirstname: response.data.cfirst,
                //             clastname: response.data.clast,
                //             cemail: response.data.cemail,
                //             ctelephone: response.data.ctelephone,
                //             ctype: response.data.ctype,
                //             loggedIn: true
                //         });
                //
                //         $location.path('/home-page');
                //         $timeout(function () {
                //             $scope.$apply();
                //         });
                //
                //     }else {
                //         alert('Informacion invalida');
                //     }
                //
                // }, function (err) {
                //     console.log('QUERY ERROR', err);
                //
                // });
            };


            this.endSession =  function () {
                $cookies.remove('user');
            };


          //DO NOT DELETE
            return this;

        }

    ]);
