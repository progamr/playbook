(function(module){

    var alerting = function($timeout) {

        var errorHandler = function() {
            
        };
        return {
            errorHandler : errorHandler
        };

    };
    module.factory('alerting', alerting);
}(angular.module('common')));