(function(module){

    var alerting = function($timeout) {

        var currentAlerts = [];

        var addWarning  = function (message) {
            addAlert('warning', message);
        };

        var addDanger = function (message) {
            addAlert('danger', message);
        };

        var addInfo = function (message) {
            addAlert('info', message);
        };

        var addSuccess = function (message) {
            addAlert('success', message);
        };

            var addAlert = function (type, message) {
            currentAlerts.push({type : type, message : message});
        };

        var errorHandler = function() {

        };
        return {
            addDanger : addDanger,
            addInfo : addInfo,
            addSuccess : addSuccess,
            addWarning : addWarning,
            addAlert : addAlert,
            currentAlerts: currentAlerts,
            errorHandler : errorHandler
        };

    };
    module.factory('alerting', alerting);
}(angular.module('common')));