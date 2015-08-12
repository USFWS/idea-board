'use strict';

describe('Service: Flag', function () {

  // load the service's module
  beforeEach(module('ideasApp'));

  // instantiate service
  var Flag;
  beforeEach(inject(function (_Flag_) {
    Flag = _Flag_;
  }));

  it('should do something', function () {
    expect(!!Flag).toBe(true);
  });

});
