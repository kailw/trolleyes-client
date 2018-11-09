'use strict'

moduleUsuario.controller('usuarioRemoveController', ['$scope', '$http', '$location', 'toolService', '$routeParams',
    function ($scope, $http, $location, toolService, $routeParams) {
        $scope.id = $routeParams.id;
        $http({
            method: 'GET',
            url: 'http://localhost:8081/trolleyes/json?ob=usuario&op=get&id=' + $scope.id
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDatoUsuario = response.data.message;
        }, function (response) {
            $scope.ajaxDatoUsuario = response.data.message || 'Request failed';
            $scope.status = response.status;
        });
        $scope.tabla = true;
        $scope.eliminar = function (accion) {
            if (accion === "eliminar") {
                $http({
                    method: 'GET',
                    url: 'http://localhost:8081/trolleyes/json?ob=usuario&op=remove&id=' + $scope.id
                }).then(function (response) {
                    $scope.mensaje = true;
                    $scope.mensaje2 = false;
                    $scope.status = response.status;
                    $scope.ajaxDatoUsuario = response.data.message;
                }, function (response) {
                    $scope.ajaxDatoUsuario = response.data.message || 'Request failed';
                    $scope.status = response.status;
                });
            } else {
                $scope.mensaje2 = true;
                $scope.mensaje = false;
                $scope.tabla = true;
            }
            
        };

    }]);