'use strict';

describe('Controller: ProfileUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('ideasApp'));

  var ProfileUpdateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfileUpdateCtrl = $controller('ProfileUpdateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProfileUpdateCtrl.awesomeThings.length).toBe(3);
  });
});
