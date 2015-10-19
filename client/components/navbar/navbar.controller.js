'use strict';

angular.module('meanappV8App')
  .controller('NavbarCtrl', function ($scope, $location, $rootScope) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
     
    //$scope.$on('UserPmi'), function (event, data) {
    //    $scope.user = data;
      //};

    $scope.user = $rootScope.UID;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });