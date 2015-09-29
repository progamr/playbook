(function (module) {

    var confirmPromotion = function ($modal) {

        // implementation details


        // public API to be returned
        return function (employee) {

            var options = {
                templateUrl : 'templates/confirmPromotion.html',
                controller : function () {
                    this.employee = employee;
                },
                controllerAs : 'model'
            };
            return $modal.open(options).result;

        };
    };


    module.factory('confirmPromotion', confirmPromotion);
}(angular.module('ui')));