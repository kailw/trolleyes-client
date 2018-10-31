'use strict'

moduleLinea.controller('lineaPlistController', ['$scope', '$http', '$location', 'toolService',
    function ($scope, $http, $location, toolService) {
        $scope.ruta = $location.path();
        $scope.limpiar = function () {
            $scope.numeroInsertar = "";
            $scope.numeroPagina = "";
            $scope.numeroRegistrosPagina = "";
            $scope.cssAlertSuccessUno = "";
            $scope.cssAlertSuccessDos = "";
            $scope.jsonMensajesProductos1 = "";
            $scope.jsonMensajesProductos2 = "";
            $scope.jsonProductos = "";
        }

        $scope.mostrarProductos = function () {
            $scope.ocultarProductos = true,
                    $http({
                        method: "GET",
                        withCredential: true,
                        url: "http://localhost:8081/trolleyes/json?ob=linea&op=getpage&rpp=" + $scope.numeroRegistrosPagina + "&page=" + $scope.numeroPagina
                    }).then(function (response) {
                $scope.status = response.status;
                $scope.jsonProductos = response.data.message;
            }, function (response) {
                $scope.cssAlertSuccessDos = "alert alert-danger"
                $scope.jsonMensajesProductos2 = "Debes introducir al menos un número";
                $scope.status = response.status;
            });
        }

        $scope.isActive = toolService.isActive;

    }
]);