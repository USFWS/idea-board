'use strict';

describe('Controller: FlagCtrl', function () {

  // load the controller's module
  beforeEach(module('ideasApp'));

  var FlagCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FlagCtrl = $controller('FlagCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FlagCtrl.awesomeThings.length).toBe(3);
  });
});
