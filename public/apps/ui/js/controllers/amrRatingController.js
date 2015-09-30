(function (module) {
    var amrRatingController = function ($scope) {
        this.initialize = function (min, max) {
            $scope.stars = Array(max - min + 1);
            $scope.preview = -1;
        };

        $scope.click = function ($index) {
            $scope.value = $index +1;
        };

        $scope.mouseover = function ($index) {
            $scope.preview = $index;
        };

        $scope.mouseout = function () {
            $scope.preview = -1;
        };

        $scope.styles = function ($index) {
            return {
                "glyphicon": true,
                "glyphicon-star": $index < $scope.value,
                "glyphicon-star-empty": $index >= $scope.value,
                "starpreview": $index <= $scope.preview
            };
        };
    };

    module.controller('amrRatingController', amrRatingController);
}(angular.module('ui')));