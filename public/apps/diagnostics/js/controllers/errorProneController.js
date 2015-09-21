(function (module) {

    var errorProneController = function (alerting) {

        var model = this;
        model.alertTypes = alerting.alertTypes;
        model.alertType = model.alertTypes[0];
        model.alertMessage = '';

        model.createAlert = function () {
            alerting.addAlert(model.alertType, model.alertMessage);
            model.alertType = model.alertTypes[0];
            model.alertMessage = '';
        };

    };
    module.controller('errorProneController', errorProneController);
}(angular.module('diagnostics')));