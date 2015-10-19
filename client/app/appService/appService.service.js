'use strict';

angular.module('meanappV8App')
  .service('appService', function () {
      // AngularJS will instantiate a singleton by calling "new" on this function

      var Usr = {};

      return {
          getUsr: function () {
              return Usr;
          },
          setUsr: function (val) {
              Usr = val;
          }
      };
  });
