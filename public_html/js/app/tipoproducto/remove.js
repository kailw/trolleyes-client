'use strict'

moduleTipoproducto.controller('tipoproductoRemoveController', ['$scope', '$http', '$location', 'toolService', '$routeParams',
    function ($scope, $http, $location, toolService, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.ob = "tipoproducto";
        $http({
            method: 'GET',
            url: 'http://localhost:8081/trolleyes/json?ob='+ $scope.ob + '&op=get&id=' + $scope.id
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDatoTipoproducto = response.data.message;
        }, function (response) {
            $scope.ajaxDatoTipoproducto = response.data.message || 'Request failed';
            $scope.status = response.status;
        });
        $scope.tabla = true;
        $scope.mensaje3 = true;

        $scope.eliminar = function (accion) {
            if (accion === "eliminar") {
                $http({
                    method: 'GET',
                    url: 'http://localhost:8081/trolleyes/json?ob='+ $scope.ob +'&op=remove&id=' + $scope.id
                }).then(function (response) {
                    $scope.mensaje = true;
                    $scope.mensaje2 = false;
                    $scope.mensaje3 = false;
                    $scope.tabla = false;
                    $scope.status = response.status;
                    $scope.ajaxDatoTipoproducto = response.data.message;
                }, function (response) {
                    $scope.ajaxDatoTipoproducto = response.data.message || 'Request failed';
                    $scope.status = response.status;
                });
            } else {
                $scope.mensaje2 = true;
                $scope.mensaje3 = false;
                $scope.mensaje = false;
                $scope.tabla = true;
            }

        };
        $scope.isActive = toolService.isActive;

    }]);