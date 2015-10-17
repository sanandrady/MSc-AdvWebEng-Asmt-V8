'use strict';

/**
 * @ngdoc function
 * @name updateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the updateApp
 */
angular.module('updateApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
