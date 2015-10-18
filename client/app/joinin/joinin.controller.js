'use strict';

//angular.module('meanappV8App')
//  .controller('JoininCtrl', function ($scope) {
//    $scope.message = 'Hello';
//  });

angular.module('meanappV8App')
  .controller('JoininCtrl', function ($scope, $http) {
      $scope.message = 'List of stored PMI records';

      var refresh = function () {
          $http.get('/api/pmis').success(function (pmilist) {
              $scope.pmilist = pmilist;
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

      $scope.addPmi = function () {
          if ($scope.newPmi === '') {
              $scope.alert = 'Please enter valid username and password';
              return;
          }
          //$http.post('/api/pmis',
          //    {
          //        firstname: $scope.newPmi,
          //        lastname: $scope.newPmi,
          //        dob: $scope.newPmi,
          //        username: $scope.newPmi,
          //        password: $scope.newPmi,
          //        email: ''
          //    });
          $scope.newPmi = '';
      };

      $scope.deletePmi = function (id) {
          $http.delete('/api/pmis/' + id);
          refresh();
      };
  });
  