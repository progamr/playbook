(function (module) {

    var amrRating = function () {

        return {
            scope : {
                value : '='
            },
            require : 'amrRating',
            templateUrl : 'templates/rating.html',
            controller : "amrRatingController",
            link : function (scope, element, attributes, controller) {

                var min = parseInt(attributes.min  || "1");
                var max = parseInt(attributes.max  || "10");

                controller.initialize(min, max);
            }
        };

    };

    module.directive('amrRating', amrRating);

}(angular.module('ui')));