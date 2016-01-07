controllers.controller('ServiceController', function($rootScope, $scope, $routeParams, SrvService){
    $scope.suiteId = $routeParams.suiteId;
    $scope.services = [];

    $scope.loadServices = function(suiteId){
        SrvService.getServices(suiteId).then(function(data){
            $scope.services = data;
        });
    }

    $scope.loadServices($scope.suiteId);
});