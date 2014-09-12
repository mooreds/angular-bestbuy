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

  beforeEach(module('dealApp'));
  beforeEach(module('dealServices'));

  describe('ListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;

      scope = $rootScope.$new();
      scope.searchDate = "2014-09-26";
      ctrl = $controller('ListCtrl', {$scope: scope});
    }));

    it('sane controller', function() {
      expect(ctrl).toBeDefined();
      expect(ctrl).not.toBeNull();
    });

    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('deadline');
    });

    it('should accept set value of date', function() {
      expect(scope.searchDate).toBe("2014-09-26");
      
    });

    it('should create model with 0 objects fetched from xhr', function() {
      expect(scope).toBeDefined();
      expect(scope.deals).toEqualData(undefined);
      $httpBackend.expectJSONP("http://api.remix.bestbuy.com/v1/products(offers.startDate>2014-09-26)?show=name,sku,image,url,offers.type,offers.url,offers.text&pageSize=100&format=json&apiKey=zsgty2qhg93qstyadx88yruf&callback=JSON_CALLBACK").respond('{"from": 1, "to": 0, "total": 0, "currentPage": 1, "totalPages": 0, "queryTime": "0.021", "totalTime": "0.022", "partial": false, "canonicalUrl": "/v1/products(offers.startDate>2014-09-26)?show=name,sku,image,url,offers.type,offers.url,offers.text&format=json&apiKey=zsgty2qhg93qstyadx88yruf", "products": [ ], "dan":true }');
      $httpBackend.flush();
      expect(scope.deals.length).toEqual(0);

    });

    it('should create model with 4 objects fetched from xhr', function() {
      expect(scope).toBeDefined();
      expect(scope.deals).toEqualData(undefined);
      $httpBackend.expectJSONP("http://api.remix.bestbuy.com/v1/products(offers.startDate>2014-09-26)?show=name,sku,image,url,offers.type,offers.url,offers.text&pageSize=100&format=json&apiKey=zsgty2qhg93qstyadx88yruf&callback=JSON_CALLBACK").respond('{"from": 1, "to": 0, "total": 0, "currentPage": 1, "totalPages": 0, "queryTime": "0.021", "totalTime": "0.022", "partial": false, "canonicalUrl": "/v1/products(offers.startDate>2014-09-26)?show=name,sku,image,url,offers.type,offers.url,offers.text&format=json&apiKey=zsgty2qhg93qstyadx88yruf", "products": [  { "name": "3D-BD-TEENAGE MUTANT NINJA TURTLES(3D+BD (Blu-ray 3D)", "sku": 8412161, "image": "http://img.bbystatic.com/BestBuy_US/en_US/images/musicmoviegame//pdpimages/8412161.jpg", "url": "http://www.bestbuy.com/site/3d-bd-teenage-mutant-ninja-turtles3d-bd-blu-ray-3d/8412161.p?id=3278717&skuId=8412161&cmp=RMX&ky=28ov7gajpUEmAyUSuTF0RHbQh8GKi3uFo", "offers": [ { "type": "special_offer", "url": "http://www.bestbuy.com/site/null/special-offer/pcmcat330300050011.c?id=pcmcat330300050011", "text": "Free Shipping on Orders $35 and Up" }, { "type": "featured_offer", "url": null, "text": "Darkness has settled over New York City as Shredder has an iron grip on everything from the police to the politicians.  The future is grim until four unlikely brothers rise from the sewers and discover their destiny as Teenage Mutant Ninja Turtles." } ] }, { "name": "4 Film Favorites: Batman (4 Disc) (Boxed Set) (Blu-ray Disc)", "sku": 5446004, "image": "http://img.bbystatic.com/BestBuy_US/en_US/images/musicmoviegame//pdpimages/5446004.jpg", "url": "http://www.bestbuy.com/site/4-film-favorites-batman-4-disc-boxed-set-blu-ray-disc/5446004.p?id=3184592&skuId=5446004&cmp=RMX&ky=28ov7gajpUEmAyUSuTF0RHbQh8GKi3uFo", "offers": [ { "type": "special_offer", "url": "http://www.bestbuy.com/site/null/special-offer/pcmcat330300050011.c?id=pcmcat330300050011", "text": "Free Shipping on Orders $35 and Up" }, { "type": "digital_insert", "url": null, "text": null } ] }, { "name": "Acer - 20\\" LED HD Monitor", "sku": 8816192, "image": "http://img.bbystatic.com/BestBuy_US/images/products/8816/8816192_sc.jpg", "url": "http://www.bestbuy.com/site/acer-20-led-hd-monitor/8816192.p?id=1218902549934&skuId=8816192&cmp=RMX&ky=28ov7gajpUEmAyUSuTF0RHbQh8GKi3uFo", "offers": [ { "type": "special_offer", "url": "http://www.bestbuy.com/site/null/special-offer/pcmcat311400050025.c?id=pcmcat311400050025", "text": "Free Shipping" }, { "type": "special_offer", "url": "http://www.bestbuy.com/site/null/special-offer/pcmcat330300050011.c?id=pcmcat330300050011", "text": "Free Shipping on Orders $35 and Up" }, { "type": "digital_insert", "url": null, "text": null } ] }, { "name": "Acer - 27\\" LED HD Monitor", "sku": 4753004, "image": "http://img.bbystatic.com/BestBuy_US/images/products/4753/4753004_sc.jpg", "url": "http://www.bestbuy.com/site/acer-27-led-hd-monitor/4753004.p?id=1219103680327&skuId=4753004&cmp=RMX&ky=28ov7gajpUEmAyUSuTF0RHbQh8GKi3uFo", '+
' "offers": [ { "type": "special_offer", "url": "http://www.bestbuy.com/site/null/special-offer/pcmcat330300050011.c?id=pcmcat330300050011", "text": "Free Shipping on Orders $35 and Up" }, { "type": "special_offer", "url": "http://www.bestbuy.com/site/null/special-offer/pcmcat311400050025.c?id=pcmcat311400050025", "text": "Free Shipping" }, { "type": "digital_insert", "url": null, "text": null } ] } ] }');
      $httpBackend.flush();
      expect(scope.deals.length).toEqual(4);

    });

  });

  describe('ListCtrlWithDefaultDate', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;

      scope = $rootScope.$new();
      ctrl = $controller('ListCtrl', {$scope: scope});
    }));


    it('should set the default value of date', function() {
      var oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      var fmtdate = oneWeekAgo.getFullYear()+'-'+(oneWeekAgo.getMonth()+1)+'-'+oneWeekAgo.getDate();
      expect(scope.searchDate).toBe(fmtdate);
    });

  });

});
