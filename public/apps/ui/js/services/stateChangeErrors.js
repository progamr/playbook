(function (module) {

    module.run(function ($rootScope, alerting) {
        // we passed $rootScope to be able to listen for this event raised by angularUi
        $rootScope.$on('$stateChangeError', function (event, toState, toParams,
                                                     fromState, fromParams, error) {
            alerting.addDanger('could not load state ' + toState.name);

        });
    });

}(angular.module('ui')));