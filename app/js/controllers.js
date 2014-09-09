'use strict';
/* Controllers Module */
var dealsControllers = angular.module('dealControllers', []);

dealsControllers.controller('ListCtrl', ['$scope', 'Deals', function($scope, Deal) {
  $scope.deals = Deal.query();
  $scope.orderProp = 'deadline';
}]);
