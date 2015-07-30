'use strict';

describe('Controller: ReviewtagCtrl', function () {

  // load the controller's module
  beforeEach(module('ideasApp'));

  var ReviewtagCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReviewtagCtrl = $controller('ReviewtagCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReviewtagCtrl.awesomeThings.length).toBe(3);
  });
});
