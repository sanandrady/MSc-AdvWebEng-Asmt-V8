'use strict';


  //  angular.module('pateRefAppV8App')
  //.controller('JoinCtrl', function ($scope, $routeProvider) {
  //    $scope.join = $routeProvider
  //    .when('/joinin', {
  //        templateUrl: 'views/joinin.html',
  //        controller: 'JoinCtrl'
  //    })
  //    .otherwise({
  //        templateUrl: 'views/joinin.html',
  //        controller: 'JoinCtrl'
  //    });

//});

var patApp = angular.module('pateRefAppV8App', []);

patApp.controller('JoinCtrl', ['$scope', '$http', function ($scope, $http) {

    console.log('Hello World from JoinCtrl');

    var refresh = function () {
        $http.get('/pmi').success(function (response) {
            console.log('I got the data');
            $scope.pmi = response;
            $scope.user = '';
        });
    };

    refresh();

    $scope.addUser = function () {
        console.log($scope.user);
        $http.post('/pmi', $scope.user).success(function (response) {
            console.log(response);
            refresh();

        });
    };
}]);