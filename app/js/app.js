'use strict';
/* App Module */
var dealsApp = angular.module('dealApp', [
'ngRoute',
'dealControllers',
'dealServices'
]);

dealsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/deals', {
        templateUrl: 'partials/deal-list.html',
        controller: 'ListCtrl'
      }).
      //when('/pulses/:pulseId', {
        //templateUrl: 'partials/pulse-detail.html',
        //controller: 'PulseDetailCtrl'
      //}).
      otherwise({redirectTo: 'deals'});
   }
]);

