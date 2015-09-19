(function(module) {

    var addToken = function(currentUser, $q) {
        // implementation details
        var request = function(config) {

            if(currentUser.profile.loggedIn) {
                config.headers.Authorization = 'Bearer' + currentUser.profile.token;
            }
            return $q.when(config);
        };
        // public API to be returned
        return {
            request : request
        };
    };

    module.factory('addToken', addToken);
    // register the interceptor in the $httpProvider
    module.config(function($httpProvider){
        $httpProvider.interceptors.push('addToken');
    });
}(angular.module('common')));