//controllers
var controllers = angular.module('controllers',[]);

//services
var services = angular.module('services',[]);

//filters
var filters = angular.module('filters',[]);

//directives
var directives = angular.module('directives',[]);

//interceptors
var interceptors = angular.module('interceptors',[]);

//application
var ngApp = angular.module('ngSeedApp',['ngResource',
                                       'ngRoute',
									   'ngAnimate',
									   'ui.bootstrap',
									   'ui.bootstrap.collapse',
									   'ui.bootstrap.alert',
                                       'controllers',
                                       'services',
                                       'filters',
                                       'directives',
                                       'interceptors'
                                       ]);
									   
ngApp.factory('mainService', function(){
	return {
	};
});

ngApp.controller('mainController', function($rootScope, $scope, $route){
    $rootScope.showSpinner = false;
    $rootScope.httpMessage = null;
});

ngApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/hello.html',
        controller: 'HelloController'
      })
      .when('/suite', {
        templateUrl: 'views/suite.html',
        controller: 'SuiteController'
       })
       .when('/service', {
        templateUrl: 'views/service.html',
        controller: 'ServiceController'
       })
      .when('/service/:suiteId', {
        templateUrl: 'views/service.html',
        controller: 'ServiceController'
       })
      .otherwise({
        redirectTo: '/'
      });
  });
