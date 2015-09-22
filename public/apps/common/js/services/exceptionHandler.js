(function (module) {

    /*
     to decorate a service you can wrap it with a function that will return
     an object that is >= the original service object
     Ex : if you decorate $log you have to return an obj which
     has the $log service 4 methods + your custom methods
      */

    // in this case the $exceptionHandler is a function object so we need to return a function
    module.config(function ($provide) {
        // $delegate will be always represents the original service
        $provide.decorator('$exceptionHandler', function ($delegate, $injector) {
            return function (exception, cause) {
                $delegate(exception, cause);
                var alerting = $injector.get('alerting');
                // ! Note ! there is no guarantee that the exception will have a message property
                // so you have to check first if it has this property to or not
                alerting.addDanger(exception.message);
            };
        });
    });
}(angular.module('common')));