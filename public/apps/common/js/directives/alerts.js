(function(module) {
    var alerts = function (alerting) {

        // implementation details

        // public API to be returned
        return {
            restrict : 'AE', // specify the directive to be either an Attribute or element directive
            templateUrl : '/apps/common/templates/alerts.html',
            scope : true,  // isolate the scope and use new scope object not the parent scope object to avoid conflicts
            controller : function ($scope) {
                $scope.removeAlert = function (alert) {
                    alerting.removeAlert(alert);
                };
            },
            link : function (scope) {
                // link the currentAlerts array to put them into the scope object of this directive
                scope.currentAlerts = alerting.currentAlerts;
            }
        };

    };
    module.directive('alerts', alerts);
}(angular.module('common')));



/*
Note : the link(scope, element, attribute) function takes these parameters as fixed parameters they are not injected
but controller : function ($scope) {};
this is an injectable function when i need scope i inject it
 */