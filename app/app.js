'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/',{templateUrl:'views/lista.html', controller: 'ListaCtrl'})
  $routeProvider.otherwise({redirectTo: '/'});
}]);
