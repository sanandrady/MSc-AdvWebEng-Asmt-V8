'use strict';

angular.module('meanappV8App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('referral', {
        url: '/referral',
        templateUrl: 'app/referral/referral.html',
        controller: 'ReferralCtrl'
      });
  });