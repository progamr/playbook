(function(module) {


    var secretController = function(recipes, $sce) {
        var model = this;
        model.recipe = {
            title : '',
            instructions : '',
            ingredients : [{name : '', quantity : null}]
        };

        model.getTrustedTitle = function () {
            return $sce.trustAsHtml(model.recipe.title);
        };
        recipes.getSecret().then(function(data) {
            model.recipe = data.recipe;
            console.log(data.recipe);
        });

    };

    module.controller('secretController', secretController);
}(angular.module('security')));