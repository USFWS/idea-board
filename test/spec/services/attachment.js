'use strict';

describe('Service: Attachment', function () {

  // load the service's module
  beforeEach(module('ideasApp'));

  // instantiate service
  var Attachment;
  beforeEach(inject(function (_Attachment_) {
    Attachment = _Attachment_;
  }));

  it('should do something', function () {
    expect(!!Attachment).toBe(true);
  });

});
