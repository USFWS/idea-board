'use strict';

describe('Directive: toggleSubscribe', function () {

  // load the directive's module
  beforeEach(module('ideasApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<toggle-subscribe></toggle-subscribe>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the toggleSubscribe directive');
  }));
});
