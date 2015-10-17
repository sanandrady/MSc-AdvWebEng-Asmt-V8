'use strict';

/**
 * @ngdoc function
 * @name pateRefAppV8App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pateRefAppV8App
 */
angular.module('pateRefAppV8App')
  .controller('MainCtrl', function ($scope) {
    $scope.things = [
      'NodeJS',
      'AngularJS',
      'ExpressJS',
      'MongoDB',
      'HTML5 Boilerplate',
      'Karma'
    ];
  });
