'use strict';

describe('service', function() {

  // load modules
  beforeEach(module('bestbuyApp'));

  // Test service availability
  it('check the existence of Deals factory', inject(function(Deals) {
      expect(Deals).toBeDefined();
    }));
  
});
