'use strict';



angular.module('meanappV8App')
  .controller('ReferralCtrl', function ($scope, $http, $rootScope) {
      //$scope.message = 'List of Referral records';
      $scope.id = $rootScope.UID;

      $http.get('/api/pmis/' + $rootScope.UID).success(function (pmi) {
          $scope.pmi = pmi;
          $scope.name = pmi.firstname + ' ' + pmi.lastname;
          $scope.email = pmi.email;
          $scope.user = pmi.username;
      });

      var refresh = function () {
          $http.get('/api/refs')
              .success(function (resp) {
                  $scope.reflist = resp;
              })
          .error(function (resp) {
              console.log('Error: ' + resp);
          });
      };

      refresh();

      $scope.addRef = function () {
          
          if ($scope.newRef === '') {
              console.log('Error: blank referral details');
              return;
          }
          $http.post('/api/refs', {patid: $rootScope.UID, refdate: $scope.newRef.refdate, refreason: $scope.newRef.refreason})
          .success(function (resp) {
              console.log('Success: ' + resp);
              $scope.newRef = '';
          })
          .error(function (resp) {
              $scope.alert = 'Please enter valid username and password';
              console.log('Error: ' + resp);
              $scope.newPmi = '';
          });
          refresh();
      };

      $scope.deleteRef = function (id) {
          $http.delete('/api/refs/' + id);
          refresh();
      };
  });