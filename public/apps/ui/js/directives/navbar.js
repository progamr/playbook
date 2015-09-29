(function (module) {

    var navbar = function () {

        return {
            templateUrl : 'templates/nav.html'
        };
    };

    module.directive('navbar', navbar);

}(angular.module('ui')));