services.factory('SuiteService', function($http){
	return {
		getSuites : function(){
			return $http.get('json/suite.json');
		},
		addSuite : function(suite){

		}
	};
});