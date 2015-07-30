'use strict';

describe('Controller: TagdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('ideasApp'));

  var TagdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TagdetailCtrl = $controller('TagdetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TagdetailCtrl.awesomeThings.length).toBe(3);
  });
});
