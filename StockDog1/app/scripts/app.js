'use strict';

/**
 * @ngdoc overview
 * @name stockDog1App
 * @description
 * # stockDog1App
 *
 * Main module of the application.
 */
angular
  .module('stockDog1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
