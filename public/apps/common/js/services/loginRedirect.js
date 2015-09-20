(function(module) {

    // implementation details
    var loginRedirect = function($q, $location) {

        var lastPath = '/';
        var responseError = function(response) {

            if( response.status == 400 || response.status == 401 ) {
                // redirect to another route
                lastPath = $location.path();
                $location.path('/login');
            }
            // reject the response and deliver it to any one else that was listening to this rejection
            return $q.reject(response);
        };

        var redirectPostLogin = function() {
            $location.path(lastPath);
            lastPath = '/';
        };

        // public API to be returned
        return {
            responseError : responseError,
            redirectPostLogin : redirectPostLogin
        };
    };
    module.factory('loginRedirect', loginRedirect);
    // register the interceptor in the $httpProvider
    module.config(function($httpProvider){
        $httpProvider.interceptors.push('loginRedirect');
    });
}(angular.module('common')));