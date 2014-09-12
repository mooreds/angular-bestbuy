'use strict';
/* Controllers Module */
var dealsControllers = angular.module('dealControllers', []);

dealsControllers.controller('ListCtrl', ['$scope', 'Deals', function(sc,d) {
  var deals = [];
  sc.orderProp = 'deadline';
  var oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  var fmtdate = oneWeekAgo.getFullYear()+'-'+(oneWeekAgo.getMonth()+1)+'-'+oneWeekAgo.getDate();
  sc.searchDate = sc.searchDate || fmtdate;
  d.query(sc.searchDate).then(function(deals) {
     sc.deals = deals;
  });
}]);
