(function (module) {

    var adminController = function ($http, alerting, confirmPromotion) {

        var model = this;

        // implementation details
        var removeEmployee = function (employee) {
            for(var i = 0; i < model.employees.length; i++) {
                if(employee === model.employees[i]) {
                    model.employees.splice(i, 1);
                    alerting.addInfo(employee.lastName + ' promoted!');
                }
            }
        };

        model.employees = [{firstName : '', lastName : '', rating : 1}];

        // public API to be returned
        model.promote = function (employee) {
            confirmPromotion(employee).then(removeEmployee);
        };

        $http.get('/employees').then(function (response) {
            model.employees = response.data;
        }).catch(alerting.errorHandler('failed to load employees data!'));

    };

    module.controller('adminController', adminController);

}(angular.module('ui')));