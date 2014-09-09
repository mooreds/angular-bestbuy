'use strict';

describe('service', function() {

  // load modules
  beforeEach(module('dealApp'));

  // Test service availability
  it('check the existence of Deals factory', inject(function(Deals) {
      expect(Deals).toBeDefined();
  }));
  it('check the existence of methods on deals', inject(function(Deals) {
      expect(Deals.get).toBeDefined();
      expect(Deals.query).toBeDefined();
  }));
  
});
