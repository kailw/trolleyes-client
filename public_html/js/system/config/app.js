'use strict'

var trolleyes = angular.module('MyApp', [
    'ngRoute',
    'services',
    'commonControllers',
    'tipousuarioControllers',
    'usuarioControllers',
    'productoControllers',
    'tipoproductoControllers',
    'facturaControllers',
    'lineaControllers',
    'ui.bootstrap'
]);


var moduleCommon = angular.module ('commonControllers',[]);
var moduleService = angular.module ('services',[]);
var moduleTipousuario = angular.module ('tipousuarioControllers',[]);
var moduleUsuario = angular.module ('usuarioControllers',[]);
var moduleProducto = angular.module ('productoControllers',[]);
var moduleTipoproducto = angular.module ('tipoproductoControllers',[]);
var moduleFactura = angular.module ('facturaControllers',[]);
var moduleLinea = angular.module ('lineaControllers',[]);