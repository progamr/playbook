(function(module) {

    // implementation details
    var loginRedirect = function($q, $location) {
        var responseError = function(response) {
            if(response.status == 400) {
                // redirect to another route
                $location.path('/login');
            }
            console.log(response.status);
            // reject the response and deliver it to any one else that was listening to this rejection
            return $q.reject(response);
        };
        // public API to be returned
        return {
            responseError : responseError
        };
    };
    module.factory('loginRedirect', loginRedirect);
    // register the interceptor in the $httpProvider
    module.config(function($httpProvider){
        $httpProvider.interceptors.push('loginRedirect');
    });
}(angular.module('common')));