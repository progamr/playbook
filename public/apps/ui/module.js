(function () {
    var module = angular.module('ui', [
        'common',
        'ngAnimate',
        'ui.router',
        'ui.bootstrap',
    ]);

    module.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('dashboard', {url : '/dashboard', templateUrl : 'templates/dashboard.html'})
                .state("overall", { parent:"dashboard", url: "/overall", templateUrl: "templates/overall.html" })
                .state("customers", { parent:"dashboard", url: "/customers", templateUrl: "templates/customers.html" })
                .state("injuries", { parent: "dashboard", url: "/injuries", templateUrl: "templates/injuries.html" })
                .state("costs", { parent:"dashboard", url: "/costs", templateUrl: "templates/costs.html" })
            .state('admin', {url : '/admin', templateUrl : 'templates/admin.html'});

        $urlRouterProvider.otherwise('/dashboard/overall');

    });
}());