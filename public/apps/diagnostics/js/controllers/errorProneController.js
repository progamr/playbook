(function (module) {

    var errorProneController = function (alerting, $http) {

        var model = this;
        model.alertTypes = alerting.alertTypes;
        model.alertType = model.alertTypes[0];
        model.alertMessage = '';

        model.createAlert = function () {
            alerting.addAlert(model.alertType, model.alertMessage);
            model.alertType = model.alertTypes[0];
            model.alertMessage = '';
        };

        model.createException = function (){
            throw new Error('some thing has gone terribly wrong');
        };

        $http.get('/fdg').then(function () {

        }).catch(alerting.errorHandler('failed to load data!'));


    };
    module.controller('errorProneController', errorProneController);
}(angular.module('diagnostics')));