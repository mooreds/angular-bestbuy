'use strict';

/* jasmine specs for controllers go here */
describe('controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('bestbuyApp'));
  beforeEach(module('bestbuyServices'));

  describe('BestBuyListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;

      $httpBackend.expectGET('').
          respond(
);

      scope = $rootScope.$new();
      ctrl = $controller('BestBuyListCtrl', {$scope: scope});
    }));


    it('should create model with 4 object fetched from xhr', function() {
      expect(scope.deals).toEqualData(undefined);
      $httpBackend.flush();
      expect(scope.deals.length).toEqual(4);

    });


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('name');
    });
  });

});
