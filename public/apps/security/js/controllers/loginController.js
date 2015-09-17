(function(module){

    var loginController = function(oauth, currentUser, alerting) {
        var model = this;
        model.username = '';
        model.password = '';
        model.user = currentUser.profile;

        model.login = function(form) {
            if(form.$valid) {
                oauth.login(model.username, model.password)
                    .catch(alerting.errorHandler('could not login'));
                model.username = model.password = '';
                form.$setUntouched();
            }
        };


    };
    module.controller('loginController', loginController);

}(angular.module('security')));
