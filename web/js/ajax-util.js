interceptors.config(function($httpProvider){
    $httpProvider.interceptors.push(function($q, $rootScope){
        return{
          'request' : function(config){
            $rootScope.showSpinner = true;
            return config;
          },
          'requestError' : function(rejection){
            $rootScope.showSpinner = false;
            $rootScope.httpMessage = "Request failed with code "+rejection.status+': '+rejection.statusText;
            return $q.reject(rejection);
          },
          'response' : function(response){
            $rootScope.showSpinner = false;
            $rootScope.httpMessage = null;
            return response;
          },
          'responseError' : function(rejection){
            $rootScope.showSpinner = false;
            $rootScope.httpMessage = "Request failed with code "+rejection.status+': '+rejection.statusText;
            return $q.reject(rejection);
          },
        };
    });
});