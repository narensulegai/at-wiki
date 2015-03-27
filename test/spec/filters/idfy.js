'use strict';

describe('Filter: idFy', function () {

  // load the filter's module
  beforeEach(module('atWikiApp'));

  // initialize a new instance of the filter before each test
  var idFy;
  beforeEach(inject(function ($filter) {
    idFy = $filter('idFy');
  }));

  it('should return the input prefixed with "idFy filter:"', function () {
    var text = 'angularjs';
    expect(idFy(text)).toBe('idFy filter: ' + text);
  });

});
