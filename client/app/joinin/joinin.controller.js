'use strict';

//angular.module('meanappV8App')
//  .controller('JoininCtrl', function ($scope) {
//    $scope.message = 'Hello';
//  });


angular.module('meanappV8App')
  .controller('JoininCtrl', function ($scope, $http, $location, $rootScope) {
      $scope.message = 'List of stored PMI records';

      var refresh = function () {
          $http.get('/api/pmis')
              .success(function (resp) {
                  $scope.pmilist = resp;
              })
          .error(function (resp) {
              console.log('Error: ' + resp);
          });
      };

      refresh();

      //$scope.addPmi = function () {
      //    $scope.alert = $scope.uname;
      //}
      //if ($scope.newPmi + 1 === 1) {
      //    //return;
      //    $scope.alert = 'Please enter valid username and password';
      //}
      //else{
      //$http.post('/api/pmis', $scope.newPmi).success(function (response) {
      //        $scope.alert1 = response;                  
      //        $scope.newPmi = '';
      //        refresh();
      //    })};

      //$scope.addPmi = function (newPmi) {
      //    if (newPmi.uname === '' || newPmi.pwd ==='') {
      //        $scope.alert = 'Please enter valid username and password';
      //        return;
      //    }
      //    $http.post('/api/pmis',
      //        {
      //            firstname: newPmi.fname,
      //            lastname: newPmi.lname,
      //            dob: newPmi.dob,
      //            username: newPmi.uname,
      //            password: newPmi.pwd,
      //            email: newPmi.email
      //        });
      //    $scope.newPmi = '';
      //    refresh();
      //};



      $scope.addPmi = function () {
          //$scope.alert = $scope.newPmi;
          if ($scope.newPmi === '') {
              console.log('Error: blank registration details');
              return;
          }
          $http.post('/api/pmis', $scope.newPmi)
          .success(function (data) {
              console.log('Success: ' + data._id);
              $http.get('/api/pmis/' + data._id).success(function (data) {
                  //appService.setUsr = (data._id);
                  $rootScope.UID = data._id;
                  //$rootScope.$broadcast('UsrPmi', data._id);
                  $location.path('/referral');
              });
              $scope.newPmi = '';
          })
          .error(function (resp) {
              $scope.alert = 'Please enter valid username and password';
              console.log('Error: ' + resp);
              $scope.newPmi = '';
          });



          refresh();
      };


      $scope.deletePmi = function (id) {
          $http.delete('/api/pmis/' + id);
          refresh();
      };
  });

  

  