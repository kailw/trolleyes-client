'use strict'

moduleLinea.controller('lineaViewController', ['$scope', '$http', '$location', 'toolService', '$routeParams',
    function ($scope, $http, $location, toolService, $routeParams) {
        $scope.id = $routeParams.id;   
        $scope.ob = "linea";
        $http({
            method: 'GET',            
            url: 'http://localhost:8081/trolleyes/json?ob=' +$scope.ob +'&op=get&id=' + $scope.id
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDatoLinea = response.data.message;
        }, function (response) {
            $scope.ajaxDatoLinea = response.data.message || 'Request failed';
            $scope.status = response.status;
        });                

        $scope.isActive = toolService.isActive;

    }]);