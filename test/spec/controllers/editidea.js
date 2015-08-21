'use strict';

describe('Controller: EditideaCtrl', function () {

  // load the controller's module
  beforeEach(module('ideasApp'));

  var EditideaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditideaCtrl = $controller('EditideaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditideaCtrl.awesomeThings.length).toBe(3);
  });
});
