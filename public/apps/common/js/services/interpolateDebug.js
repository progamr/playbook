(function (module) {
    module.config(function ($provider) {
        $provider.decorator('$interpolate', function($delegate, $log) {
            var serviceWrapper = function () {
                // as we don't know the exact arguments that will be passed to this serviceWrapper
                // we will invoke the original service inside of the wrapper and pass to it
                // any number  of parameters thanks to the built in arguments property
                // that exists in each js function
                $delegate.apply(this, arguments);
            };

            angular.extend(serviceWrapper, $delegate);
            return serviceWrapper;
        });
    });
}(angular.module('common')));