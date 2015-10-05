(function(){
    var app = angular.module('forms', ['common', 'ui', 'ngRoute', 'ngAnimate', 'ngMessages']);

    var routes = [
        {
            url : '/',
            settings : {templateUrl : 'templates/home.html'}
        },{
            url : '/results',
            settings : {templateUrl : 'templates/results.html'}
        }
    ];

    // application configuration
    var registerRoutes = function($routeProvider) {
        routes.forEach(function(route) {
            $routeProvider.when(route.url, route.settings);
        });
        $routeProvider.otherwise({redirectTo : routes[0].url});
    };

    app.config(function($routeProvider){registerRoutes($routeProvider)});
}());
