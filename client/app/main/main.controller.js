'use strict';

angular.module('meanappV8App')
  .controller('MainCtrl', function ($scope, $http, $location) {
      //$scope.awesomeThings = [];

      //$http.get('/api/things').success(function (awesomeThings) {
      //    $scope.awesomeThings = awesomeThings;
      //});

      //$scope.addThing = function () {
      //    if ($scope.newThing === '') {
      //        return;
      //    }
      //    $http.post('/api/things', { name: $scope.newThing });
      //    $scope.newThing = '';
      //};

      //$scope.deleteThing = function (thing) {
      //    $http.delete('/api/things/' + thing._id);
      //};

      //$scope.login = function () {
      //    if ($scope.login === '') {
      //        console.log('Error: blank login details');
      //        return;
      //    };
      //    console.log('Loging User');        
      //    $http.post('/api/pmis', $scope.login)
      //      .success(function (resp) {
      //          console.log('Success: ' + resp);
      //          $location.path('/referral');
      //      })
      //      .error(function (resp) {              
      //          console.log('Error: ' + resp);              
      //      });
      //}

      

      $scope.newlogin = function () {
          //$scope.loginalert = $scope.login;
          if ($scope.login + '*' === '*') {
              console.log($scope.login.username + ' ' + $scope.login.password);
              $scope.loginalert = 'Unrecognised username/password, please register';
              $scope.loginalert = $scope.login;
              return;
          }
          else {
              $http.post('/api/pmis', {username: $scope.login.username, password: $scope.login.password})              
                  .error(function (data) {
                      console.log('Success: ' + data._id);
                      $http.get('/api/pmis/' + data._id).success(function (pmi) {
                          //$scope.login = '';                          
                          console.log('Success: ' + pmi._id);                          
                          $scope.id = pmi._id;
                          $scope.name = pmi.firstname + ' ' + pmi.lastname;
                          $scope.email = pmi.email;
                      });
                      $location.path('/referral');
                  })
              .success(function (data, status) {
                  console.log($scope.login.username + ' ' + $scope.login.password);
                  $scope.loginalert = 'Unrecognised username or password, please register';
                  console.log('Error: ' + data + '-' + status);
                  $http.delete('/api/pmis/' + data._id);
                  $scope.login = '';
              });
          }
      };
  });  

//var navupdate = angular.module('meanappV8App')
//  .controller('NavCtrl', function ($scope) {
      
//  })