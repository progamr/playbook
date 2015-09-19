(function(module){

    var currentUser = function() {

        // implementation details
        var setProfile = function(username, token) {
            profile.username = username;
            profile.token= token;
        };
        var profile = {
            username : '',
            token : '',
            get loggedIn() {
                return this.token;
            }
        };
        // public API to be returned
        return {
            setProfile : setProfile,
            profile : profile
        };
    };
    module.factory('currentUser', currentUser);

}(angular.module('common')));