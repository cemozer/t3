controllers.controller('SuiteController', function($rootScope, $scope, SuiteService){
    $scope.suites = [];

    $scope.loadSuites = function(){
        SuiteService.getSuites().success(function(data){
            $scope.suites = data;
        });
    }

    $scope.loadSuites();
});