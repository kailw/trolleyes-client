trolleyes.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl:'js/app/common/home.html', controller: 'homeController'});
        $routeProvider.when('/tipousuario/plist', {templateUrl:'js/app/tipousuario/plist.html', controller: 'tipousuarioPlistController'});        
        $routeProvider.when('/producto/plist/:rpp?/:page?', {templateUrl:'js/app/producto/plist.html', controller: 'productoPlistController'});
        $routeProvider.when('/producto/plist/:rpp?/:page?/:column?/:order?', {templateUrl:'js/app/producto/plist.html', controller: 'productoPlistController'});
        $routeProvider.when('/producto/view/:id?', {templateUrl:'js/app/producto/view.html', controller: 'productoViewController'});
        $routeProvider.when('/factura/plist', {templateUrl:'js/app/factura/plist.html', controller: 'facturaPlistController'});
        $routeProvider.when('/linea/plist', {templateUrl:'js/app/linea/plist.html', controller: 'lineaPlistController'});
        $routeProvider.when('/usuario/plist', {templateUrl:'js/app/usuario/plist.html', controller: 'usuarioPlistController'});
        $routeProvider.when('/usuario/plist/:id?', {templateUrl:'js/app/usuario/view.html', controller: 'usuarioViewController'});
        $routeProvider.when('/usuario/plist/:rpp?/:page?/:order?', {templateUrl:'js/app/usuario/plist.html', controller: 'usuarioPlistController'});
        $routeProvider.when('/tipoproducto/plist', {templateUrl:'js/app/tipoproducto/plist.html', controller: 'tipoproductoPlistController'});        
        $routeProvider.when('/tipousuario/edit/:id?', {templateUrl:'js/app/tipousuario/edit.html', controller: 'tipousuarioEditController'});
        $routeProvider.otherwise({redirectTo: '/'});       
    }]);