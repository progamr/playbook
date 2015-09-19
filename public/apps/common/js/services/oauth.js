(function(module){

    // implementation details
    var oauth = function($http, currentUser) {
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

            return $http.post(url, data)
                .then(function(response) {
                    console.log(response);
                    currentUser.setProfile(username, response.data.token);
                    console.log('username : ' + username + ',token' + response.data.token);
                    return username;
                });
        };

        // public API to be returned
        return {
            login : login
        };
    };

    module.factory('oauth', oauth);

}(angular.module('common')));