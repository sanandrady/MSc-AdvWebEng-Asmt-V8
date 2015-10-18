'use strict';

angular.module('meanappV8App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('joinin', {
        url: '/joinin',
        templateUrl: 'app/joinin/joinin.html',
        controller: 'JoininCtrl'
      });
  });