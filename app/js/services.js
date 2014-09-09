'use strict';

var dealServices = angular.module('dealServices',[]);

dealServices.factory('Deals',['$http',function($http,$scope) {
  var url = "http://api.remix.bestbuy.com/v1/products(offers.startDate>2014-08-26)?show=name,sku,image,url,offers.type,offers.url,offers.text&pageSize=100&format=json&apiKey=zsgty2qhg93qstyadx88yruf";
   var Deals = function(data) {
        angular.extend(this, data);
    };
  Deals.get = function() {
    $http.get(url).success(function(data,status){
      $scope.data = data;
      $scope.status = status;
    }).error(function(data,status){
      $scope.data = data || "request failed";
      $scope.status = status;
    });
  }
  Deals.query = function() {
    $http.get(url).success(function(data,status){
      $scope.data = data;
      $scope.status = status;
    }).error(function(data,status){
      $scope.data = data || "request failed";
      $scope.status = status;
    });
  }
  return Deals;
}]);



