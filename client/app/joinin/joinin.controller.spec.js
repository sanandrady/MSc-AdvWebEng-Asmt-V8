'use strict';

describe('Controller: JoininCtrl', function () {

  // load the controller's module
  beforeEach(module('meanappV8App'));

  var JoininCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JoininCtrl = $controller('JoininCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
