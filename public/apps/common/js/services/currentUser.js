(function(module){

    var currentUser = function (localStorage) {

        // implementation details
        var USERKEY = "u_token";
        var setProfile = function (username, token) {
            profile.username = username;
            profile.token= token;
            localStorage.add(USERKEY, profile);
        };

        var saveUser = function () {
            localStorage.add(USERKEY, profile);
        };

        var removeUser = function () {
            localStorage.remove(USERKEY);
        };

        var initialize = function () {
            var user = {
                    username : '',
                    token : '',
                    get loggedIn() {
                        return this.token;
                    }
            };

            var localUser = localStorage.get(USERKEY);
            if(localUser) {
                user.username = localUser.username;
                user.token = localUser.token;
            }

            return user;
        };
        var profile = initialize();
        // public API to be returned
        return {
            setProfile : setProfile,
            profile : profile,
            save : saveUser,
            remove : removeUser,
        };
    };
    module.factory('currentUser', currentUser);

}(angular.module('common')));