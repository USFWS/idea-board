'use strict';

describe('Controller: UserDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('ideasApp'));

  var UserDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserDetailCtrl = $controller('UserDetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserDetailCtrl.awesomeThings.length).toBe(3);
  });
});
