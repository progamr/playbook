(function(module){

    // implementation details
    var oauth = function($http, currentUser, $location) {
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

        var logout = function () {
            currentUser.profile.username = '';
            currentUser.profile.token = '';
            currentUser.remove();
            $location.path('/login');
        };

        // public API to be returned
        return {
            login : login,
            logout : logout
        };
    };

    module.factory('oauth', oauth);

}(angular.module('common')));