'use strict'

moduleUsuario.controller('usuarioPlistController', ['$scope', '$http', '$location', 'toolService',
    function ($scope, $http, $location, toolService) {
        $scope.ruta = $location.path();
        $scope.numeroPagina = "1";
        $scope.numeroRegistrosPagina = "10";
        
        $scope.limpiar = function () {
            $scope.numeroPagina = "";
            $scope.numeroRegistrosPagina = "";
            $scope.cssAlertSuccess = "";
            $scope.ajaxMensajeUsuario = "";
            $scope.ajaxDatoUsuario = "";
        }

        $http({
            method: "GET",
            withCredential: true,
            url: "http://localhost:8081/trolleyes/json?ob=usuario&op=getpage&rpp=" + $scope.numeroRegistrosPagina + "&page=" + $scope.numeroPagina
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDatoUsuario = response.data.message;
        }, function (response) {
            $scope.cssAlertSuccess = "alert alert-danger"
            $scope.ajaxMensajeUsuario = "Debes introducir al menos un número";
            $scope.status = response.status;
        });

        $scope.mostrarDatos = function () {
            $http({
                method: "GET",
                withCredential: true,
                url: "http://localhost:8081/trolleyes/json?ob=usuario&op=getpage&rpp=" + $scope.numeroRegistrosPagina + "&page=" + $scope.numeroPagina
            }).then(function (response) {
                $scope.status = response.status;
                $scope.ajaxDatoUsuario = response.data.message;
            }, function (response) {
                $scope.cssAlertSuccess = "alert alert-danger"
                $scope.ajaxMensajeUsuario = "Debes introducir al menos un número";
                $scope.status = response.status;
            });
        }

        $scope.isActive = toolService.isActive;

    }
]);