'use strict';

describe('Controller: NewtagCtrl', function () {

  // load the controller's module
  beforeEach(module('ideasApp'));

  var NewtagCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewtagCtrl = $controller('NewtagCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewtagCtrl.awesomeThings.length).toBe(3);
  });
});
