(function (module) {
    module.config(function ($provide) {
        $provide.decorator('$interpolate', function($delegate, $log) {

            var serviceWrapper = function () {
                // as we don't know the exact arguments that will be passed to this serviceWrapper
                // we will invoke the original service inside of the wrapper and pass to it
                // any number  of parameters thanks to the built in arguments property
                // that exists in each js function

                var bindingFunc = $delegate.apply(this, arguments);
                // check if bindingFunction is a function and arguments[0] is a valid expression
                if(angular.isFunction(bindingFunc) && arguments[0]) {
                    return bindingWrapper(bindingFunc, arguments[0].trim());
                }

                return bindingFunc;
            };

            var bindingWrapper = function (bindingFunction ,bindingExpression) {
                return function () {
                    var result = bindingFunction.apply(this, arguments);
                    var trimmed = result.trim();
                    var log = trimmed ? $log.info : $log.warn;
                    log.call($log, bindingExpression + '=' + trimmed) ;;
                    return result;
                };
            };

            angular.extend(serviceWrapper, $delegate);
            return serviceWrapper;

        });
    });

}(angular.module('common')));