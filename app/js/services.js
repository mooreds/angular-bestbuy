'use strict';

var dealServices = angular.module('dealServices',[]);

dealServices.factory('Deals',['$http',function(http) {
  var url = "http://api.remix.bestbuy.com/v1/products(offers.startDate>XXXSTARTDATEXXX)?show=name,sku,image,url,offers.type,offers.url,offers.text&pageSize=100&format=json&apiKey=zsgty2qhg93qstyadx88yruf&callback=JSON_CALLBACK";
   
   var Deals = function(data) {
        angular.extend(this, data);
    };
  Deals.query = function(startdate) {
    url = url.replace("XXXSTARTDATEXXX",startdate);
    return http.jsonp(url).then(function (response) {
      return response.data.products;
     });
  }
  return Deals;
}]);



