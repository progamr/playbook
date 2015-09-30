(function (module) {

    var amrRating = function () {

        return {
            scope : {
                value : '='
            },
            require : 'amrRating',
            templateUrl : 'templates/rating',
            controller : "amrRatingController",
            link : function (scope, element, attributes, controller) {

                var min = parseInt(attributes.min  || "1");
                var max = parseInt(attributes.max  || "10");

                element.addClass("btn-group");

                scope.$watch('value', function(newValue) {
                    element.empty();
                    console.log(newValue);
                    for(var i = 0; i < newValue; i++) {
                        element.append("<button class='btn btn-default btn-xs'><span class='glyphicon glyphicon-star'></span></button>");
                    }
                });
                element.on('click', function () {
                    scope.$apply(function () {
                        var rateValue = parseInt(scope.value);
                        if (rateValue < max)  {
                            rateValue += 1;
                            scope.value = rateValue;
                        }
                        else
                            scope.value = min;
                    });

                });

            }
        };

    };

    module.directive('amrRating', amrRating);

}(angular.module('ui')));