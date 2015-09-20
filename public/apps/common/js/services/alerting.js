(function(module){

    var alerting = function($timeout) {

        var currentAlerts = [];
        var addAlert = function (type, message) {
            currentAlerts.push({type : type, message : message});
        };

        var errorHandler = function() {

        };
        return {
            addAlert : addAlert,
            errorHandler : errorHandler
        };

    };
    module.factory('alerting', alerting);
}(angular.module('common')));