(function(module){

    // implementation details
    var oauth = function($http) {
        var url = '/login';
        this.setUrl = function(newUrl) {
            url = newUrl;
        };

        var login = function(username, password) {
            var data = {
                username : username,
                password : password,
                grant_type : "password"
            };

            return $http.post(url, data);
        };

        // public API to be returned
        return {
            login : login
        };
    };

    module.factory('oauth', oauth);

}(angular.module('common')));