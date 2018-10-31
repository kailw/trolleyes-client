'use strict'

moduleProducto.controller('productoPlistController', ['$scope', '$http', '$location', 'toolService',
    function ($scope, $http, $location, toolService) {
        $scope.pagina = "1";
        $scope.numeroRegistrosPagina = "5";
        $scope.limpiar = function () {
            $scope.numeroInsertar = "";
            $scope.numeroPagina = "";
            $scope.numeroRegistrosPagina = "";
            $scope.cssAlertSuccessUno = "";
            $scope.cssAlertSuccessDos = "";
            $scope.jsonMensajesProductos1 = "";
            $scope.jsonMensajesProductos2 = "";
            $scope.jsonProductos = "";
            $scope.pagina = "1";
            $scope.numeroRegistrosPagina = "5";
        }
        $scope.crearProductos = function () {
            $scope.cssAlertSuccessUno = "alert alert-success",
                    $http({
                        method: "GET",
                        withCredential: true,
                        url: "http://localhost:8080/trolleyes/json?ob=producto&op=fill&numero=" + $scope.numeroInsertar
                    }).then(function (response) {
                $scope.status = response.status;
                if ($scope.numeroInsertar == 1) {
                    $scope.jsonMensajesProductos1 = "Se ha creado " + $scope.numeroInsertar + " producto nuevo."
                } else {
                    $scope.jsonMensajesProductos1 = "Se han creado " + $scope.numeroInsertar + " productos nuevos."
                }
            }, function (response) {
                $scope.cssAlertSuccessUno = "alert alert-danger"
                $scope.jsonMensajesProductos1 = "Debes introducir al menos un número";
                $scope.status = response.status;
            });
        }




        $scope.mostrarProductos = function () {
            $scope.pagina = "1";
            $scope.ocultarProductos = true,
                    $http({
                        method: "GET",
                        withCredential: true,
                        url: "http://localhost:8080/trolleyes/json?ob=producto&op=getpage&rpp=" + $scope.numeroRegistrosPagina + "&page=" + $scope.pagina
                    }).then(function (response) {
                $scope.status = response.status;
                $scope.jsonProductos = response.data.message;
            }, function (response) {
                $scope.cssAlertSuccessDos = "alert alert-danger"
                $scope.jsonMensajesProductos2 = "Debes introducir al menos un número";
                $scope.status = response.status;
            });
            $http({
                method: 'GET',
                withCredentials: true,
                url: "http://localhost:8080/trolleyes/json?ob=producto&op=getcount"
            }).then(function (response) {
                $scope.status = response.status;
                $scope.numeroRegistros = response.data.message;
                $scope.numeroPaginas = Math.ceil($scope.numeroRegistros / $scope.numeroRegistrosPagina);
                $scope.arrayPages = [];
                for (var i = 1; i <= $scope.numeroPaginas; i++) {
                    $scope.arrayPages.push(i);
                }
                if (!$scope.mostrar) {
                    $scope.mostrar = !$scope.mostrar;
                }
                if ($scope.activar) {
                    $scope.activar = !$scope.activar;
                }
            }, function (response) {
                $scope.numeroRegistros = response.data.message || 'Request failed';
                $scope.status = response.status;
            });
        };



        $scope.elegirPagina = function () {
            $http({
                method: 'GET',
                withCredentials: true,
                url: "http://localhost:8081/trolleyes/json?ob=producto&op=getpage&rpp=" + $scope.numeroRegistrosPagina + "&page=" + $scope.pagina
            }).then(function (response) {
                $scope.status = response.status;
                $scope.jsonProductos = response.data.message;
            }, function (response) {
                $scope.jsonProductos = response.data.message || 'Request failed';
                $scope.status = response.status;
            });
        };

        $scope.isActive = toolService.isActive;

    }
]);