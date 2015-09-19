(function(module) {
    var recipes = function($http) {
        // implementation details
        var getSecret = function() {
            return $http.get('/secret').then(function(response) {
                return response.data;
            });
        };
        // public API to be returned
        return {
            getSecret : getSecret
        };
    };

    module.factory('recipes', recipes);


}(angular.module('security')));