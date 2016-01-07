services.factory('SrvService', function($http, $filter){
	return {
		getServices : function(suiteId){
			return $http.get('json/service.json')
				.then(function(response){
					if(suiteId)
						return $filter('filter')(response.data, {'suiteId':suiteId});
					else
						return response.data;
				});
		}
	};
});