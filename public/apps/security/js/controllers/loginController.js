(function(module){

    var loginController = function(oauth, currentUser, alerting, loginRedirect) {
        var model = this;
        model.username = '';
        model.password = '';
        model.user = currentUser.profile;

        model.login = function(form) {
            if(form.$valid) {
                console.log(model.username);
                oauth.login(model.username, model.password)
                    .then(function(){
                        loginRedirect.redirectPostLogin();
                    })
                    .catch(alerting.errorHandler('could not login'));
                model.username = model.password = '';
                form.$setUntouched();
            }
        };

        model.signOut = function() {
            oauth.logout();

        };

    };
    module.controller('loginController', loginController);

}(angular.module('security')));
